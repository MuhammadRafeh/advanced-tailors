import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const Card = props => { //text | image
    return (
        <View style={[styles.card, props.style]}>
            <Text>
                sad
            </Text>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        height: height / 5.5,
        width: '100%',
        backgroundColor: 'green',
        borderRadius: 5
    }
});
