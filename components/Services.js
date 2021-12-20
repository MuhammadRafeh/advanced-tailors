import React from 'react';
import { Text, View } from 'react-native';

const Services = props => {
    return (
        <View style={{ width: '46%', height: 126, borderRadius: 10, elevation: 1, alignItems: 'center', paddingHorizontal: 20, backgroundColor: 'white', marginLeft: props.index % 2 == 0 ? 3 : 0, marginRight: props.index % 2 != 0 ? 3 : 0, marginVertical: 10 }}>
            <View style={{ height: '50%' }}>
                {props.image}
            </View>
            <View style={{ height: 1, width: '100%' }} />
            <View style={{ height: '40%' }}>
                <Text>
                    {props.title}
                </Text>
            </View>
        </View>
    );
}

export default Services;
