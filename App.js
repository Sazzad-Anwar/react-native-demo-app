import React, { useEffect, useState, useCallback } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './app/screens/Home';
import { StatusBar } from 'expo-status-bar';
import Login from './app/screens/Login';
import Test from './app/screens/Test';
import { View } from 'react-native';

enableScreens();
let Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#7BA3CC" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#7BA3CC',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Blog App'
            }}
          />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

