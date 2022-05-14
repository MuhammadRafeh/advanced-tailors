import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import colors from '../constants/colors';
const { width } = Dimensions.get('window');

const ProductCard = props => {
    const { item } = props;

    return (
        <View style={[styles.card, { width: (width - 41) / 1.68, height: '85%' }]}>
            <View style={{ height: '55%' }}>

            </View>
            <View style={{ height: '45%', width: '96%', alignItems: 'center', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                <View style={{ marginBottom: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }} numberOfLines={2} adjustsFontSizeToFit={true}>{item.name}</Text>
                </View>
                <View>
                    <Text style={{ color: colors.primary }} numberOfLines={1} adjustsFontSizeToFit={true}>${item.price}</Text>
                </View>
            </View>
        </View>
    );
}

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginRight: 17,
        marginLeft: 3,
        marginVertical: 20,
        elevation: 5,
        borderRadius: 20,
    }
});
