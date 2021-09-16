import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Post = ({ item, deletePost }) => {
    const [likeColor, setLikeColor] = useState('#303030');

    return (
        <View style={styles.post}>
            <Text style={styles.title}>
                {item.id}. {item.title}
            </Text>
            <Text style={styles.body}>{item.body}</Text>
            <View style={styles.iconList}>
                <View style={styles.likeContainer}>
                    <Icon
                        name="thumb-up"
                        size={30}
                        color={likeColor}
                        style={styles.icon}
                        onPress={() =>
                            setLikeColor(likeColor === '#0080ff' ? '#303030' : '#0080ff')
                        }
                    />
                    <Text>{likeColor === '#0080ff' ? 'You & 120 others' : '120 others'}</Text>
                </View>
                <Icon
                    name="delete"
                    size={30}
                    color="#494949"
                    style={styles.icon}
                    onPress={() => deletePost(item.id)}
                />
            </View>
        </View>
    );
};

const Posts = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
    const isFocused = useIsFocused();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
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

    const renderItem = ({ item }) => <Post item={item} deletePost={deletePost} />;

    if (!posts.length) {
        return (
            <ActivityIndicator
                animating={true}
                size={50}
                style={styles.spinner}
                color={'#7BA3CC'}
            />
        );
    }
    return (
        <View style={styles.root}>
            <Snackbar visible={visible} duration={2000} onDismiss={() => setVisible(false)}>
                Post deleted
            </Snackbar>
            <FlatList
                data={posts}
                renderItem={renderItem}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
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
    post: {
        margin: 5,
        padding: 14,
        borderWidth: 1,
        borderColor: '#adadad',
        borderRadius: 4,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    body: {
        padding: 5,
        position: 'relative',
    },
    iconList: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    icon: {
        paddingHorizontal: 5,
    },
    likeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Posts;
