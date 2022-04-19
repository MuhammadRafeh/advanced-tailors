import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { gql } from 'graphql-request';
import graphcms from '../../graphCMS/graphCMS';

const QUERY = gql`
query MyQuery {
  categories {
    name
    collections {
      name
      varieties {
        name
      }
    }
  }
}`;

const Home = props => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const { categories } = await graphcms.request(QUERY);
    console.log(categories)
    setCategories(categories);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.screen}>
      {categories.map(category => (
        <View key={category.name} style={{ padding: 10 }}>
          <View>
            <Text>
              {category.name}
            </Text>
          </View>
          <View>
            <ScrollView horizontal>
              {
                category.collections.map(item => {
                  console.log(item, 'asd')
                  return (
                    < View />
                  )
                })
              }
            </ScrollView>
          </View>
        </View>
      ))}
    </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
