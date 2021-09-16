import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react/cjs/react.development';

const Post = ({ item, deletePost }) => {
    const [likeColor, setLikeColor] = useState('#303030');
    return (
        <Pressable style={styles.post}>
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
        </Pressable>
    );
};

const styles = StyleSheet.create({
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

export default Post;
