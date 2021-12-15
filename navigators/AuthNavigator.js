import React from 'react';
import { View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

function MyTabs() {
    return (
        <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>

            </View>
            <View style={{ flex: 2.2 }}>
                <Tab.Navigator
                    initialLayout={{ width }}
                    screenOptions={{
                        tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'none' },
                        tabBarStyle: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
                        tabBarIndicatorStyle: { width: width/3, backgroundColor: 'rgb(250,74,12)', left: width/12 }
                    }}
                >
                    <Tab.Screen name="Login" component={Login}/>
                    <Tab.Screen name="Sign-up" component={Signup} />
                </Tab.Navigator>
            </View>
        </View>

    );
}

export default MyTabs;
