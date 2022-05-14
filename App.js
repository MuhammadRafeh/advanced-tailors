import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigators/AuthNavigator';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import MainNavigator from './navigators/MainNavigator';

import { NativeBaseProvider } from 'native-base';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {!isAuth && <AuthNavigator />}
        {isAuth && <MainNavigator />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
