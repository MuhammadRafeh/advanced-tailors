import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FoodItemsList from '../../components/FoodItemsList';
import theme from '../../constants/theme';
import foodItem from '../../data/Items';

const Food = props => {
    return (
        <View style={styles.screen}>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 35 }}>
                <Text style={{ color: theme.primary }}>see more</Text>
            </View>
            <View style={{ flex: 4 }}>
                <FoodItemsList foodItemsList={foodItem}/>
            </View>
        </View>
    );
}

export default Food;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: 'blue'
        // justifyContent: 'space-around'
    }
});
