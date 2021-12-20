import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginModal from '../models/LoginModal';
import Index from '../screens/Index';

const RootStack = createStackNavigator();

function StartNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name="Index" component={Index} options={{ headerShown: false }} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen name="LoginModal" component={LoginModal} options={{ headerShown: false }} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default StartNavigator;
