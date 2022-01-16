import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Main = props => {
    return (
        <View style={styles.screen}>
                <Text>
                    Main
                </Text>
        </View>
    );
}

export default Main;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } 
});
