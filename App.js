import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigators/AuthNavigator';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import HomeNavigator from './navigators/HomeNavigator';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <NavigationContainer>
      {!isAuth && <AuthNavigator />}
      {isAuth && <HomeNavigator />}
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
