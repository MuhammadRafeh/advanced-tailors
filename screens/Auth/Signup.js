import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import Button from '../../components/Button';
import colors from '../../constants/colors';
import firebase from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';

// import firebase from 'firebase'
// require('firebase/auth')

const Signup = props => {
    const [selected, setSelected] = useState('email');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handleSignup = () => {
        console.log(firebase.FacebookAuthProvider.credential('asd', 'asd'))
        firebase.createUserWithEmailAndPassword(email, password).then((object) => {
            dispatch(authenticate(object.user.uid, email, false, false));
            object.user.sendEmailVerification();
        }).catch(err => {
            Alert.alert('Something went wrong', err.message, [{ text: 'Ok' }])
        })
    }

    return (
        <View style={{ flex: 1, paddingTop: 18, marginTop: 2, paddingHorizontal: 20, backgroundColor: 'white' }}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                autoFocus={true}
                onFocus={setSelected.bind(null, 'email')}
                onBlur={setSelected.bind(null, 'no')}
            />
            <View style={{ marginVertical: 10, marginBottom: !isEmailValid ? 15 : 6 }}>
                <Text style={{ color: 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    {
                        !isEmailValid && "Invalid email address."
                    }
                </Text>
            </View>
            <TextInput
                placeholder='Username'
                value={password}
                onChangeText={setPassword}
                style={{ color: 'black', borderBottomWidth: 1, borderColor: isUsernameValid ? selected == 'username' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                placeholderTextColor={isUsernameValid ? selected == 'username' ? colors.primary : 'grey' : 'red'}
                onFocus={setSelected.bind(null, 'username')}
                onBlur={setSelected.bind(null, 'no')}
            />
            <View style={{ marginVertical: 10, marginBottom: 20 }}>
                <Text style={{ color: isUsernameValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    {
                        isUsernameValid ? "Your username will be public. Can't change later." : "Must start with letter and have minimum 6 characters."
                    }
                </Text>
            </View>
            <TextInput
                placeholder='Password'
                style={{ color: 'black', borderBottomWidth: 1, borderColor: isPasswordValid ? selected == 'password' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                placeholderTextColor={isPasswordValid ? selected == 'password' ? colors.primary : 'grey' : 'red'}
                onFocus={setSelected.bind(null, 'password')}
                onBlur={setSelected.bind(null, 'no')}
            />
            <View style={{ marginVertical: 10, marginBottom: 28 }}>
                <Text style={{ color: isPasswordValid ? 'grey' : 'red', fontSize: 12, letterSpacing: -0.2 }}>
                    {
                        isPasswordValid ? "Include alpha numeric small & capital." : "Please include number & capital small alphabets"
                    }
                </Text>
            </View>

            <Button label={'Sign Up'} onPress={handleSignup} />
        </View>
    );
}

export default Signup;
