import React from 'react';
import { Image, Text, View, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../constants/colors';

const { width } = Dimensions.get('window');

const Services = props => {
    return (

        <TouchableWithoutFeedback onPress={props.onPress} style={{ width: width / 2.2, height: 126, borderWidth: 1, borderColor: props.isSelected ? colors.primary : 'white', borderRadius: 10, elevation: 1, paddingHorizontal: 14, backgroundColor: 'white', marginLeft: props.index % 2 == 0 ? 3 : 0, marginRight: props.index % 2 != 0 ? 3 : 0, marginVertical: 10 }}>
            <View style={{ flex: 0.6 }}>
                <Image style={{ width: '100%', height: '100%' }} resizeMode={'contain'} source={props.image} />
            </View>
            <View style={{ height: 0.3, backgroundColor: 'grey' }} />
            <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }} adjustsFontSizeToFit={true} numberOfLines={2}>
                    {props.title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Services;
