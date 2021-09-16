import React, { useState } from 'react';
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
import { TextInput, Button, Avatar } from 'react-native-paper';
let { height, width } = Dimensions.get('window');

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.root}
        >
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
                        <View style={styles.avatarContainer}>
                            <Avatar.Icon size={60} icon="account" />
                        </View>
                        <TextInput
                            style={styles.input}
                            label="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            style={styles.input}
                            label="Password"
                            secureTextEntry={showPass ? false : true}
                            value={password}
                            right={
                                <TextInput.Icon
                                    name={showPass ? 'eye-off' : 'eye'}
                                    onPress={() => setShowPass(!showPass)}
                                />
                            }
                            onChangeText={(text) => setPassword(text)}
                        />

                        <Button
                            mode="contained"
                            style={styles.button}
                            onPress={() => navigation.navigate('Home')}
                        >
                            Login
                        </Button>
                        <Button
                            icon="google"
                            mode="contained"
                            style={styles.button}
                            onPress={() => navigation.navigate('Home')}
                        >
                            Login With Google
                        </Button>
                        <Button
                            icon="facebook"
                            mode="contained"
                            style={styles.button}
                            onPress={() => navigation.navigate('Home')}
                        >
                            Login With Facebook
                        </Button>
                        <View style={styles.buttonContainer}>
                            <Text style={{ fontSize: 15, color: '#fff' }}>Don't have account?</Text>
                            <Button
                                mode="contained"
                                style={styles.button}
                                onPress={() => navigation.navigate('Home')}
                            >
                                Register
                            </Button>
                        </View>
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
    avatarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        marginVertical: 5,
    },
});

export default Login;
