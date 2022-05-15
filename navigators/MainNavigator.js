import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import MainDrawerNavigator from './MainDrawerNavigator';
import ProductDetail from '../screens/Customer/ProductDetail';

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Home'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeNav" component={MainDrawerNavigator} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            {/* <Stack.Screen name="Cart" component={ProductDetail} /> */}
        </Stack.Navigator>
    );
}

export default MainNavigator;
