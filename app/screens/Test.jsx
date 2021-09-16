import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Profile from './Profile';
import Posts from './Posts';
import Home from './Home';
import Login from './Login';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Posts} />
            <Tab.Screen name="Account" component={Profile} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default function Test() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeTabs} />
                <Stack.Screen name="Settings" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
