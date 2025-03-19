/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, ComponentType, useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Platform, SafeAreaView} from 'react-native';

import Home from './pages/Home';

type RootStackParamList = {
  Home: ComponentType<any>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

//options d'écrans pour enlever la bar d'état en haut et la barre de navigation en bas
const screenOptions: NativeStackNavigationOptions =
  Platform.OS === 'ios'
    ? {headerShown: false, animation: 'default' as any}
    : {
        headerShown: false,
        statusBarTranslucent: true,
        statusBarBackgroundColor: 'rgb(246, 246, 246)',
        statusBarHidden: false,
        statusBarStyle: 'dark',
        navigationBarHidden: false,
        animation: 'default',

        //pour passer sous la status bar
        // headerShown: false,
        // statusBarTranslucent: true,
        // statusBarColor: 'transparent',
        // statusBarHidden: false,
        // statusBarStyle: 'dark',
        // navigationBarHidden: true,
        // animation:'default'
      };

const screens: {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
}[] = [{name: 'Home', component: Home}];

export default function App() {
  const navigationContainerRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
    <>
      <NavigationContainer ref={navigationContainerRef}>
        <Stack.Navigator initialRouteName="Home">
          {screens.map(({name, component}) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={screenOptions}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
