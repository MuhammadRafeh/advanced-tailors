import React from 'react';
import { View } from 'react-native';
import colors from '../constants/colors';

const Radio = ({ isSelect }) => {
    return (
        isSelect ? (
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 20, height: 20, borderRadius: 10, backgroundColor: colors.primary }}>
                <View style={{ backgroundColor: 'white', width: 12, height: 12, borderRadius: 6 }} />
            </View>
        ) : (
            <View style={{ width: 18, height: 18, borderRadius: 9, borderColor: 'grey', borderWidth: 1 }} />
        )
    );
}

export default Radio;