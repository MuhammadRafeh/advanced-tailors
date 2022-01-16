import React from 'react';
import { View, Dimensions } from 'react-native';
// import Constants from 'expo-constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Food from '../screens/Foods/Food';
import Drinks from '../screens/Foods/Drinks';
import Snacks from '../screens/Foods/Snacks';
import Sauce from '../screens/Foods/Sauce';
import theme from '../constants/theme';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

function MyTabs() {
    return (
        <Tab.Navigator
            initialLayout={{ width }}
            screenOptions={{
                tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'none' },
                tabBarScrollEnabled: true,
                tabBarIndicatorStyle: {
                    backgroundColor: theme.primary,
                    height: 3,
                    width: (width - 41) / 4,
                    left: (width - 41) / 25
                },
                tabBarItemStyle: { width: 100 },
                tabBarActiveTintColor: theme.primary,
                tabBarInactiveTintColor: 'rgb(154,154,157)',
                tabBarStyle: { backgroundColor: 'rgb(242,242,242)', borderBottomWidth: 0, elevation: 0 }
            }}
            sceneContainerStyle={{ backgroundColor: "rgb(242,242,242)" }}
        >
            <Tab.Screen name="Sewing" component={Food} />
            <Tab.Screen name="Altering" component={Drinks} />
            <Tab.Screen name="Repairing" component={Snacks} />
            <Tab.Screen name="Modifying" component={Sauce} />
            {/* <Tab.Screen name="Meat" component={Signup} /> */}
        </Tab.Navigator>


    );
}

export default MyTabs;
