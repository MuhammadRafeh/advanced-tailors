import React from 'react';
import { ScrollView } from 'react-native';
import FoodItem from './FoodItem';

const FoodItemsList = props => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props.foodItemsList.map((item, key) => {
                return (
                    <FoodItem key={key} item={item}/>
                );
            })}
        </ScrollView>
    );
}

export default FoodItemsList;
