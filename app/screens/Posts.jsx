import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    Pressable,
    ActivityIndicator,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Snackbar, Card } from 'react-native-paper';
import Post from './Post';

const Posts = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
    const isFocused = useIsFocused();
    const [visible, setVisible] = useState(false);

    useLayoutEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(data.reverse());
        };
        getPosts();
    }, [isFocused]);

    const deletePost = (id) => {
        let updatedPosts = posts.filter((post) => post.id !== id);
        setVisible(true);
        setPosts(updatedPosts);
    };

    if (!posts.length) {
        return (
            <ActivityIndicator
                animating={true}
                size={50}
                style={styles.spinner}
                color={'#7BA3CC'}
            />
        );
    } else {
        return (
            <View style={styles.root}>
                <Snackbar visible={visible} duration={2000} onDismiss={() => setVisible(false)}>
                    Post deleted
                </Snackbar>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={posts}
                    renderItem={({ item }) => <Post item={item} deletePost={deletePost} />}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    root: {
        padding: 5,
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Posts;
