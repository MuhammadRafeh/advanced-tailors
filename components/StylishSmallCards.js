import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StylishSmallCards = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            <View>
                <Text style={{fontWeight: 'bold', letterSpacing: .2, fontSize: 16}} numberOfLines={1} adjustsFontSizeToFit={true}>
                    {props.text}
                </Text>
            </View>
            <View>
                <Text>
                   <MaterialIcons style={{ left: 20 }} size={28} color={'black'} name={'keyboard-arrow-right'} />
                </Text>
            </View>
        </View>
    );
}

export default StylishSmallCards;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: 'white',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginVertical: '2%',
        height: '8%',
        alignItems: 'center',
        borderRadius: 16
    }
})
