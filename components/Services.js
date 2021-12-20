import React from 'react';
import { Text, View } from 'react-native';

const Services = props => {
    return (
        <View style={{ width: '46%', height: 126, borderRadius: 10, elevation: 1, paddingHorizontal: 14, backgroundColor: 'white', marginLeft: props.index % 2 == 0 ? 3 : 0, marginRight: props.index % 2 != 0 ? 3 : 0, marginVertical: 10 }}>
            <View style={{ flex: 0.6 }}>
                {props.image}
            </View>
            <View style={{height: 0.3, backgroundColor: 'grey'}}/>
            <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
                    {props.title}
                </Text>
            </View>
        </View>
    );
}

export default Services;
