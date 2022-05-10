import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import Button from '../../components/Button';

const Forgot = props => {
  const [status, setStatus] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 18,
        marginTop: 2,
        paddingHorizontal: 20,
        backgroundColor: 'white',
      }}>
      <TextInput
        placeholder="Email"
        style={{
          color: 'black',
          borderBottomWidth: 1,
          borderColor: status ? 'orange' : 'red',
          paddingBottom: 0,
          paddingLeft: 0,
        }}
        placeholderTextColor={status ? 'orange' : 'red'}
        autoFocus={true}
      />
      <View style={{marginVertical: 10, marginBottom: 28}}>
        <Text
          style={{
            color: status ? 'grey' : 'red',
            fontSize: 12,
            letterSpacing: -0.2,
          }}>
          {status
            ? 'Your confirmation link will be sent to your email address.'
            : 'Invalid email address.'}
        </Text>
      </View>

      <Button label={'Send'} />
    </View>
  );
};

export default Forgot;
