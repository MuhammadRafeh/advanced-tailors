import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigators/AuthNavigator';
import { Provider, useSelector } from 'react-redux';
import MainNavigator from './navigators/MainNavigator';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <NavigationContainer>
      {!isAuth && <AuthNavigator />}
      {isAuth && <MainNavigator />}
    </NavigationContainer>
  );
}
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
