import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get('window');

const Card = props => { //text | image
    return (
        <TouchableOpacity style={[styles.card, props.style]} onPress={props.onPress}>
            <View style={{ flex: 0.8, backgroundColor: '#f0eeeb', justifyContent: 'center' }}>
                <Image source={props.image} style={{ width: '100%', height: '90%' }} resizeMode={'contain'} />
            </View>
            <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, letterSpacing: 0.3, top: -1, color: 'black' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        height: height / 5.8,
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 5,
        overflow: 'hidden'
    }
});
