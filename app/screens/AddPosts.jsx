import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import axios from 'axios';
let { height, width } = Dimensions.get('window');

const AddPosts = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState(Math.round(Math.random() * 100));

    const postBlog = async () => {
        let { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
            userId,
        });
        if (data) {
            setVisible(true);
            setTitle('');
            setBody('');
            setUserId();
            setTimeout(() => {
                navigation.navigate('Posts');
            }, 2000);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.root}
        >
            <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
                Post Added
            </Snackbar>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <ImageBackground
                        source={require('../../assets/splash2.png')}
                        resizeMode="cover"
                        style={{
                            height: height,
                            width: width,
                        }}
                    />
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            label="Title"
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                        />
                        <TextInput
                            style={styles.input}
                            label="Blog"
                            multiline
                            numberOfLines={5}
                            value={body}
                            onChangeText={(text) => setBody(text)}
                        />

                        <Button
                            mode="contained"
                            style={styles.button}
                            onPress={() => {
                                postBlog();
                                Keyboard.dismiss;
                            }}
                        >
                            Post
                        </Button>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputBox: {
        margin: 20,
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
    },
    input: {
        marginVertical: 10,
    },
    button: {
        marginVertical: 5,
    },
});

export default AddPosts;
