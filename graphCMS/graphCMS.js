import { GraphQLClient } from 'graphql-request';
const graphcms = new GraphQLClient(
    'https://api-ap-south-1.graphcms.com/v2/cl19f496qjynj01za3uut8cuf/master',
);
export default graphcms;

// import React, { useEffect } from 'react';
// import { Text, View } from 'react-native';
// import { gql } from 'graphql-request';
// import graphcms from '../../graphCMS/graphCMS';

// const QUERY = gql`
//   {
//     posts {
//       id
//       title
//       date
//     }
//   }
// `;

// const Home = props => {
//   const getStaticProps = async () => {
//     const { posts } = await graphcms.request(QUERY);
//     console.log(posts);
//   };

//   useEffect(() => {
//     getStaticProps();
//   }, []);
//   return <View style={{ flex: 1 }} />;
// };

// export default Home;
