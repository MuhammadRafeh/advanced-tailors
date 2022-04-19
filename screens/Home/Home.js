import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
  const [data, setData] = useState([]);
  const getData = async () => {
    const { posts } = await graphcms.request(QUERY);
    setData(posts);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>

    </View>
  )
};

export default Home;

const styles = StyleSheet.create({

})
