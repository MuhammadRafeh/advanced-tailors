import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Animated, { useAnimatedGestureHandler, useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Button from '../../components/Button';
import CartItem from '../../components/CartItem';
import theme from '../../constants/theme';


const Orders = props => {
    const scrollY = useSharedValue(0);
    const scrollView = useAnimatedRef();
    // const scrollHandler = useAnimatedScrollHandler({
    //     onScroll: (e) => {
            
    //     }
    // })
    const arr = [1,2,3,4,5]
    return (
        <View style={styles.screen}>
            <View style={{marginBottom: '3%', marginTop: '4%', paddingHorizontal: 36}}>
                <Text style={{textAlign: 'center', letterSpacing: -0.9, color: '#000000', fontSize: 12}}>
                    swipe on an item for actions
                </Text>
            </View>
            <View style={{height: '80%'}}>
                <Animated.ScrollView 
                    contentContainerStyle={{paddingHorizontal: 36}}
                    scrollEnabled={false}
                    // onScroll={}
                    ref={scrollView}
                >
                
                {
                    arr.map((item, index) => (
                        <CartItem key={item} scrollY={scrollY} scrollView={scrollView}/>
                    ))
                }
                </Animated.ScrollView>
            </View>

            <Button style={styles.button} label={'Complete order'}/>
        </View>
    );
}

export default Orders;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.background,
        height: '100%'
    },
    button: {
        height: '7%',
        marginTop: '7%',
        marginHorizontal: 36
    }
});
