import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigators/AuthNavigator';
import { Provider, useSelector } from "react-redux";
import store from './redux/store';
// import HomeNavigator from './navigators/HomeNavigator';
import AppDrawer from './navigators/AppDrawer';
import firebase from '@react-native-firebase/app';
// import firebase from "firebase/app";

function App() {
    // var config = {
    //     apiKey: "AIzaSyAlrE8-Hgu-tnYB-JwT6c-eOUL0zE7KbFQ",
    //     storageBucket: "shopnstich.appspot.com",
    //     // databaseURL: "https://dnorganizers-default-rtdb.firebaseio.com",
    //     projectId: "shopnstich",
    //   };

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <NavigationContainer>
            {
                !isAuth && (
                    <AuthNavigator />
                )
            }
            {
                isAuth && (
                    <AppDrawer />
                )
            }
        </NavigationContainer>
    )
}

export default function AppWrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
