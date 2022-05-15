import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { gql } from 'graphql-request';
import graphcms from '../../graphCMS/graphCMS';
import Badge from '../../components/Badge';

const QUERY = gql`
query MyQuery {
  varieties {
    id
    name
    products {
      id
      image {
        id
        url
      }
      name
      price
    }
  }
}`;


const Home = props => {
  const [varieties, setVarieties] = useState([]);
  const getData = async () => {
    const { varieties } = await graphcms.request(QUERY);
    setVarieties(varieties)
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{paddingBottom: 26}}
        data={varieties}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.row}>
            <Text numberOfLines={1} adjustsFontSizeToFit={true} style={styles.title}>
              {item.name.trim()}
            </Text>
            {
              item.products.length == 0 && (
                <View style={{ alignItems: 'center', position: 'absolute', top: 34, left: '40%' }}>
                  <Badge text={'Coming Soon'} />
                </View>
              )
            }
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 11 }}>
              <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                {
                  item.products.map(product => (
                    <ProductCard
                      key={product.id}
                      productImage={product?.image?.url}
                      productName={product.name}
                      productPrice={product.price}
                      buttonTitle={'Buy'}
                      onPress={() => {
                        props.navigation.navigate('ProductDetail', {
                          id: product.id,
                          imageURL: product?.image?.url,
                          name: product.name,
                          price: product.price
                        })
                      }}
                    />
                  ))
                }
              </View>
            </ScrollView>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: '1',
    marginLeft: 20,
    fontSize: 20
  },
  row: {
    marginVertical: 10
  }
})

export default Home;