import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Index from './screens/Index';

import AuthNavigator from './navigators/AuthNavigator';
import { Provider, useSelector } from "react-redux";
import store from './redux/store';

function App() {
    const [isShowAuth, setIsShowAuth] = useState(false);
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <NavigationContainer>
            {
                !isAuth && (
                    <>
                        {!isShowAuth && <Index setIsShowAuth={setIsShowAuth} />}
                        {isShowAuth && <AuthNavigator />}
                    </>
                )
            }
            {
                isAuth && (
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'white' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Successfully Login!</Text>
                    </View>
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
