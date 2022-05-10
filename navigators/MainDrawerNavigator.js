import React from 'react';
import { View, Dimensions } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

const { width } = Dimensions.get('window');

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from '../screens/Customer/Home';
import Profile from '../screens/Customer/Profile';
import Notification from '../screens/Customer/Notification';
import Search from '../screens/Customer/Search';
import Message from '../screens/Customer/Message';
import ManageOrders from '../screens/Customer/ManageOrders';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';
import { useSelector } from 'react-redux';

function CustomDrawerContent(props) {
    const whoIsLogin = useSelector(state => state.auth.whoIsUser);
    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1, marginTop: 75 }}>
                    <View style={{ position: 'absolute', width: 100, height: 100, borderRadius: 50, backgroundColor: colors.secondary, opacity: 0.1, top: -130, right: 20 }} />
                    <View style={{ position: 'absolute', width: 30, height: 30, borderRadius: 6, borderWidth: 8, borderColor: colors.secondary, opacity: 0.1, top: -50, left: '36%', transform: [{ rotate: '25deg' }] }} />
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <DrawerItem
                label={whoIsLogin == 'guest' ? 'Leave' : `Sign-out`} onPress={async () => {

                }}
                style={{ bottom: 40 }}

                activeTintColor={colors.primary}
                activeBackgroundColor={'white'}
                inactiveTintColor={'white'}
                icon={({ size }) => {
                    return <MaterialIcons
                        style={{ left: whoIsLogin == 'guest' ? width / 6.1 : width / 5 }}
                        name="arrow-right-alt"
                        size={size}
                        color={'white'}
                    />
                }}
                labelStyle={{ fontWeight: 'bold', right: width / 9 }}
            />
        </>
    );
}

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
    const whoIsLogin = useSelector(state => state.auth.whoIsUser);
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerActiveBackgroundColor: 'white',
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: colors.primary,
                drawerContentStyle: { justifyContent: 'space-between' },
                drawerStyle: { backgroundColor: colors.primary, width: '100%' },
                drawerLabelStyle: { fontWeight: 'bold', left: -19 },
                drawerItemStyle: { marginLeft: 26 },
                drawerType: 'slide',
                headerTitleStyle: { fontFamily: '6', top: 0.5 }
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            {
                whoIsLogin == 'guest' || whoIsLogin == 'customer' ? (
                    <>
                        {/* User & guest Screen */}
                        <Drawer.Screen name="Home" component={Home} options={({ navigation }) => ({
                            drawerIcon: ({ color, size }) => <FontAwesome5 size={size} color={color} name={'house-user'} />,
                            // headerRight: () => <HeaderButton cart navigation={navigation} text={5} />
                        })} />
                        {
                            whoIsLogin == 'customer' && (
                                < Drawer.Screen name="Message" component={Message} options={({ navigation }) => ({
                                    drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name={'mail'} />,
                                    headerLeft: () => <HeaderButton navigation={navigation} />,
                                    headerStyle: { backgroundColor: colors.offWhite }
                                })} />
                            )
                        }
                        <Drawer.Screen name="Search" component={Search} options={({ navigation }) => ({
                            drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name={'search'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStyle: { backgroundColor: colors.secondary }
                        })} />
                        {
                            whoIsLogin == 'customer' && (
                                <>
                                    <Drawer.Screen name="Notification" component={Notification} options={({ navigation }) => ({
                                        drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name={'md-notifications'} />,
                                        headerLeft: () => <HeaderButton navigation={navigation} />,
                                    })} />
                                    <Drawer.Screen name="Profile" component={Profile} options={({ navigation }) => ({
                                        drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name={'md-person-circle'} />,
                                        headerLeft: () => <HeaderButton navigation={navigation} />
                                    })} />
                                </>
                            )
                        }
                    </>
                ) : (
                    <>
                        {/* Tailor Screens */}
                        < Drawer.Screen name="Home" component={Home} options={({ navigation }) => ({
                            drawerIcon: ({ color, size }) => <FontAwesome5 size={size} color={color} name={'house-user'} />
                        })} />
                        <Drawer.Screen name="ManageOrders" component={ManageOrders} options={({ navigation }) => ({
                            drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name={'md-newspaper'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStatusBarHeight: 59,
                            headerTitle: '',
                            headerLeftContainerStyle: { paddingLeft: 15 },
                            headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: colors.offWhite },
                        })} />
                        <Drawer.Screen name="Message" component={Message} options={({ navigation }) => ({
                            drawerIcon: ({ color, size }) => <Entypo size={size} color={color} name={'shopping-bag'} />,
                            headerLeft: () => <HeaderButton navigation={navigation} />,
                            headerStatusBarHeight: 59,
                            headerTitle: '',
                            headerLeftContainerStyle: { paddingLeft: 15 },
                            headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: colors.offWhite },
                        })} />
                    </>
                )
            }

        </Drawer.Navigator>
    );
}
