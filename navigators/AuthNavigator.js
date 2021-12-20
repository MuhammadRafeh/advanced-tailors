import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BecomeTailor from '../models/BecomeTailor';
import Login from '../models/Login';
import Index from '../screens/Index';

const RootStack = createStackNavigator();

function StartNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name="Index" component={Index} options={{ headerShown: false }} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <RootStack.Screen name="BecomeTailor" component={BecomeTailor} options={{ headerShown: false }} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default StartNavigator;
