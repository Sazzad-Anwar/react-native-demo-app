import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
let { height, width } = Dimensions.get('window');

const Profile = () => {
    return (
        <View style={styles.root}>
            <View style={styles.profileView}>
                <Image
                    source={require('../../assets/user.jpg')}
                    resizeMethod="resize"
                    resizeMode="cover"
                    style={styles.profileImage}
                />
                <View style={styles.profileContainer}>
                    <Text style={styles.name}>John Doe Smith</Text>
                    <Text style={{ fontSize: 15 }}>Tech Blogger</Text>
                    <View style={styles.iconContainer}>
                        <Icon name="star" size={20} color="#ffd901" style={styles.icon} />
                        <Icon name="star" size={20} color="#ffd901" style={styles.icon} />
                        <Icon name="star" size={20} color="#ffd901" style={styles.icon} />
                        <Icon name="star" size={20} color="#ffd901" style={styles.icon} />
                        <Icon name="star-half" size={20} color="#ffd901" style={styles.icon} />
                    </View>
                    <View style={styles.testimonial}>
                        <View style={styles.item}>
                            <Text style={styles.title}>Follower</Text>
                            <Text>4,000</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.title}>Following</Text>
                            <Text>1,000</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.title}>Likes</Text>
                            <Text>20,000</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {},
    profileView: {
        alignItems: 'center',
    },
    profileContainer: {
        paddingTop: 10,
        position: 'absolute',
        top: '90%',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        alignItems: 'center',
    },
    profileImage: {
        height: height / 2,
        width: '100%',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    icon: {
        padding: 2,
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    testimonial: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    item: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default Profile;
