import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Profile = props => {
    return (
        <View style={styles.screen}>
                <Text>
                    Profile
                </Text>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } 
});
