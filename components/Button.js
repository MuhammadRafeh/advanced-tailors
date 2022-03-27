import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const Button = props => {
    return (
        <TouchableOpacity style={{ ...styles.button, ...props.style }} onPress={props.onPress}>
            <Text style={{ color: 'white', fontSize: 17, ...props.textStyle, letterSpacing: 0.4, fontFamily: '1' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

