import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';

export default function ProductCard({ productImage, productName, productPrice, buttonTitle, onPress }) {
    return (
        <View style={{ width: 180, marginHorizontal: 10 }}>
            <View style={styles.moreProductImageView}>
                <Image
                    style={{ flex: 1 }}
                    source={{
                        uri: productImage,
                    }}
                />
            </View>
            <View style={{ marginTop: 8 }}>
                <Text style={styles.moreProductName}>
                    {productName}
                </Text>
                <View style={styles.moreProductPriceView}>
                    <Text style={styles.moreProductPrice}>
                        ${productPrice}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            style={styles.moreProductIcon}
                            name='heart'
                            size={18}
                        />
                        <Icon
                            style={styles.moreProductIcon}
                            name='shopping-bag'
                            size={18}
                        />
                        <Icon
                            style={styles.moreProductIcon}
                            name='share'
                            size={18}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.moreProductBuyButton} onPress={onPress}>
                <Text style={styles.moreProductBuyButtonText}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    moreProductImageView: {
        flex: 1,
        height: 240,
        backgroundColor: '#fff',
        borderRadius: 4,
        overflow: 'hidden',
    },
    moreProductName: {
        fontFamily: '2',
        fontSize: 16,
    },
    moreProductPriceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    moreProductPrice: {
        fontSize: 16,
        fontFamily: 'MontserratRegular',
    },
    moreProductIcon: {
        marginLeft: 10,
    },
    moreProductBuyButton: {
        backgroundColor: colors.primary,
        marginTop: 10,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreProductBuyButtonText: {
        color: '#fff',
        fontFamily: '2',
        fontSize: 18,
    }
});
