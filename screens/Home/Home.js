import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { gql } from 'graphql-request';
import graphcms from '../../graphCMS/graphCMS';

const QUERY = gql`
  {
    posts {
      id
      title
      date
    }
  }
`;

const Home = props => {
  const getStaticProps = async () => {
    const { posts } = await graphcms.request(QUERY);
    console.log(posts);
  };

  useEffect(() => {
    getStaticProps();
  }, []);
  return <View style={{ flex: 1 }} />;
};

export default Home;
