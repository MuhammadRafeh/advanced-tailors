import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BecomeTailor from '../models/BecomeTailor';
import FindService from '../models/FindService';
import LoginModel from '../models/LoginModel';
import SignupModel from '../models/SignupModel';
import Forgot from '../screens/Auth/Forgot';
import Signup from '../screens/Auth/Signup';
import Index from '../screens/Index';

const RootStack = createStackNavigator();

function StartNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Forgot Password" component={Forgot} />
        <RootStack.Screen
          name="Signup"
          component={Signup}
          options={{ headerTitle: 'Sign Up' }}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{ presentation: 'modal', headerShown: false }}>
        <RootStack.Screen name="LoginModel" component={LoginModel} />
        <RootStack.Screen name="BecomeTailor" component={BecomeTailor} />
        <RootStack.Screen name="FindService" component={FindService} />
        <RootStack.Screen name="SignupModel" component={SignupModel} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default StartNavigator;
