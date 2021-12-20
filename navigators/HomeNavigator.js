import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Home/Profile';
import Notification from '../screens/Home/Notification';
import Search from '../screens/Home/Search';
import Message from '../screens/Home/Message';
import ManageOrders from '../screens/Home/ManageOrders';

const Tab = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="ManageOrders" component={ManageOrders} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default HomeNavigator;
