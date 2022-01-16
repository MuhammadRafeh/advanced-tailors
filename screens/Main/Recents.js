import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Recents = props => {
    // const { isFocused } = props.navigation;
    // useEffect(() => {
    //     if (isFocused) {
    //         props.navigation.setOptions({
    //             tabBarStyle: {
    //                 backgroundColor: 'rgb(238,238,238)',
    //                 headerStyle: { backgroundColor: 'rgb(238,238,238)' }
    //             },

    //         })
    //     }
    // }, [isFocused])
    return (
        <View style={styles.screen}>
            <Text>
                Recents
            </Text>
        </View>
    );
}

export default Recents;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)'
    }
})
