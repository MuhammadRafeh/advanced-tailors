import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Home/Profile';
import Notification from '../screens/Home/Notification';
import Search from '../screens/Home/Search';
import Message from '../screens/Home/Message';
import ManageOrders from '../screens/Home/ManageOrders';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import theme from '../constants/theme';

const Tab = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 60 }, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: 'grey', tabBarShowLabel: false,
                tabBarShowLabel: false,
                headerTitle: '',
                headerStatusBarHeight: 59,
                headerLeftContainerStyle: { paddingLeft: 30, borderBottomWidth: 0, elevation: 0 },
                headerRightContainerStyle: { paddingRight: 35, borderBottomWidth: 0 },
                tabBarActiveTintColor: theme.primary,
                tabBarInactiveTintColor: theme.secondary,
                headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: 'rgb(242,242,242)' },
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name={'home-outline'} color={color} size={27} /> }} />
            <Tab.Screen name="Message" component={Message} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name={'mail-outline'} color={color} size={27} /> }} />
            <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name={'search-outline'} color={color} size={27} /> }} />
            <Tab.Screen name="Notification" component={Notification} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name={'md-notifications-outline'} color={color} size={27} /> }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name={'md-person-circle-outline'} color={color} size={30} /> }} />
        </Tab.Navigator>
    );
}

export default HomeNavigator;
