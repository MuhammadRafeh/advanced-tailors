import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FoodItemNavigator from '../../navigators/FoodItemNavigator';
import SearchModal from '../../components/SearchModal';

const Home = props => {

    const [showModal, setShowModal] = useState(false);

    const handleTextInput = val => {
        if (val.length >= 1) {
            //Navigate to new Screen
            setShowModal(true);
            // console.log(val.length)
            // props.navigation.navigate('Search');
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.screen}
        >
            {
                showModal && (<SearchModal setShowModal={setShowModal}/>)
            }
            <View style={{ flex: 1.2 }}>
                <View>
                    <Text style={styles.label} adjustsFontSizeToFit={true} numberOfLines={1}>
                        Delicious
                    </Text>
                    <Text style={[styles.label, { top: -5 }]} adjustsFontSizeToFit={true} numberOfLines={1}>
                        food for you
                    </Text>
                </View>
                <View style={{ marginTop: 20, flex: 1 }}>
                    <TextInput
                        style={{ width: '85%', backgroundColor: 'rgb(239,238,238)', height: 50, borderRadius: 20, paddingLeft: 45, paddingRight: 10 }}
                        placeholder='Search'
                        placeholderTextColor="rgb(120,119,119)"
                        onChangeText={handleTextInput}
                    />
                    <Ionicons style={styles.searchIcon} name="md-search-outline" size={20} color="black" />
                </View>
            </View>
            <View style={{ flex: 2.5 }}>
                <FoodItemNavigator />
            </View>
        </KeyboardAvoidingView>
    );
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)',
        marginLeft: 41,
        paddingTop: 20
    },
    label: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    searchIcon: {
        position: 'absolute',
        padding: 14.2,
    }
})
