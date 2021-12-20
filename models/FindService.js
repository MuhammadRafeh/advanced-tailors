import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import Services from '../components/Services';
import Steps from '../components/Steps';
const services = [
    { id: 0, title: 'Sewing', image: require('../assets/sewing.png') },
    { id: 1, title: 'Altering', image: require('../assets/sewing.png') },
    { id: 2, title: 'Repairing', image: require('../assets/sewing.png') },
    { id: 3, title: 'Modifying', image: require('../assets/sewing.png') }
]

const FindService = props => {

    const [selected, setSelelcted] = useState([]); //id's

    const handlePressService = id => {
        if (!selected.includes(id)) {
            setSelelcted([...selected, id])
        } else {
            setSelelcted(selected.filter(item => item != id));
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 55, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 55 }} onPress={() => props.navigation.goBack()}>
                    <Icon name={'ios-arrow-up-outline'} size={20} color={'#969292'} />
                    <Text style={{ color: '#a6a1a1', fontSize: 14.5, letterSpacing: -0.3 }}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.9 }}>

                <ScrollView contentContainerStyle={{ justifyContent: 'flex-start', marginTop: 35, paddingBottom: 50 }}>
                    <View style={{ marginHorizontal: 20 }}>
                        <View style={{ marginVertical: 10, width: '90%' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                                Choose the services that best suite what you are interested in
                            </Text>
                        </View>
                        <View style={{ marginBottom: 10, marginTop: 9 }}>
                            <Text style={{ letterSpacing: -0.2, fontSize: 14, color: 'grey' }} adjustsFontSizeToFit={true} numberOfLines={1}>
                                At least select one.
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, justifyContent: 'space-between' }}>
                        {services.map((item) => {
                            return (
                                <Services
                                    isSelected={selected.includes(item.id)}
                                    key={item.id}
                                    title={item.title}
                                    index={item.id}
                                    onPress={handlePressService.bind(null, item.id)}
                                    image={item.image}
                                />
                            )
                        })}
                    </View>

                </ScrollView>
            </View>

            <View style={{ paddingHorizontal: 20, flex: 0.1, justifyContent: 'center', backgroundColor: '#FAF9F6', elevation: 8 }}>
                <Button label={'Continue'} onPress={() => props.navigation.navigate('SignupModel')} />
            </View>

        </View>
    );
}

export default FindService;
