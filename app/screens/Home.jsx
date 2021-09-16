import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import Profile from './Profile';
import Posts from './Posts';
import AddPosts from './AddPosts';

const Home = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#000000"
            barStyle={{ backgroundColor: '#7BA3CC' }}
        >
            <Tab.Screen
                name="Posts"
                component={Posts}
                options={{
                    tabBarIcon: 'home-circle',
                    tabBarLabel: 'Posts',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: 'account-circle',
                    tabBarLabel: 'Profile',
                }}
            />
            <Tab.Screen
                name="Add Post"
                component={AddPosts}
                options={{
                    tabBarIcon: 'comment-plus',
                    tabBarLabel: 'Add Post',
                }}
            />
        </Tab.Navigator>
    );
};

export default Home;
