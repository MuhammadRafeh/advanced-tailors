import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default HomeNavigator;
