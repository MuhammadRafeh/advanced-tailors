import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import colors from '../constants/colors';

const LoginModal = props => {
    const [selected, setSelected] = useState('no');
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
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: 20 }}>
                <Image />
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                        Welcome back
                    </Text>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <Text style={{ letterSpacing: -0.2, fontSize: 14, color: 'grey' }} adjustsFontSizeToFit={true} numberOfLines={1}>
                        Sign in to Shop n Stich to pick up exactly where you left off.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <View style={{ borderRadius: 6, width: '47%', backgroundColor: '#002e78', height: 36, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Facebook
                        </Text>
                    </View>
                    <View style={{ borderRadius: 6, width: '47%', backgroundColor: '#3f80e8', height: 36, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Google
                        </Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ letterSpacing: -0.2, fontSize: 14, color: 'grey' }}>
                        or sign in with email
                    </Text>
                </View>

                <View style={{ marginBottom: 40 }}>
                    <TextInput
                        placeholder='Email or username'
                        style={{ color: 'black', borderBottomWidth: 1, borderColor: selected == 'email' ? colors.primary : 'grey', paddingBottom: 0, paddingLeft: 0, fontSize: 16 }}
                        placeholderTextColor={selected == 'email' ? colors.primary : 'grey'}
                        onFocus={() => {
                            setSelected('email')
                        }}
                        onBlur={() => {
                            setSelected('no')
                        }}
                    />
                </View>

                <View style={{ marginBottom: 30 }}>
                    <TextInput
                        placeholder='Password'
                        style={{ color: 'black', borderBottomWidth: 1, borderColor: selected == 'password' ? colors.primary : 'grey', paddingBottom: 0, paddingLeft: 0, fontSize: 16 }}
                        placeholderTextColor={selected == 'password' ? colors.primary : 'grey'}
                        onFocus={() => {
                            setSelected('password')
                        }}
                        onBlur={() => {
                            setSelected('no')
                        }}
                    />
                </View>

                <Button label={'Continue'} style={{ marginBottom: 20 }} />

                <TouchableOpacity style={{ marginBottom: 24, alignItems: 'flex-end' }} onPress={() => props.navigation.navigate('Forgot Password')}>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

export default LoginModal;
