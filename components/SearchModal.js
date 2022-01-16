import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const {width, height} = Dimensions.get('window');

const SearchModal = props => {
    return (
        <View style={{flex: 1, backgroundColor: 'white', zIndex:1000}}>
            <Modal 
                isVisible={true}
                deviceHeight={height}
                deviceWidth={width}
                onBackdropPress={() => props.setShowModal(false)}
                onBackButtonPress={() => props.setShowModal(false)}
                useNativeDriver={true}
                
                customBackdrop={<View style={{flex: 1, backgroundColor: 'rgb(238,238,238)'}} />}
                animationInTiming={100}
                backdropColor={'rgb(238,238,238)'}
            >
                <View style={{ flex: 1, backgroundColor: 'rgb(238,238,238)' }}>
                    <Text>I am the modal content!</Text>
                </View>
            </Modal>
        </View>
    );
}

export default SearchModal;

const styles = StyleSheet.create({

})
