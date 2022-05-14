// import React, { useEffect, useState } from 'react';
// import { Text, View, ScrollView, StyleSheet } from 'react-native';
// import { gql } from 'graphql-request';
// import graphcms from '../../graphCMS/graphCMS';
// import ProductCard from '../../components/ProductCard';

// const QUERY = gql`
// query MyQuery {
//   categories{
//     id
//     name
//     collections {
//       id
//       name
//       varieties {
//         id
//         name
//         products {
//           id
//           name
//           price
//           description
//           excerpt
//         }
//       }
//     }
//   }
// }`;

// const Home = props => {
//   const [categories, setCategories] = useState([]);
//   const getData = async () => {
//     const { categories } = await graphcms.request(QUERY);
//     // console.log(data.categories[0].collections[0].varieties, 'dara')
//     console.log(categories, 'dara')
//     setCategories(categories);
//   };

//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <View style={styles.screen}>
//       {
//         categories.map(category => (
//           <View key={category.name} style={{ padding: 10 }}>
//             <View>
//               <Text style={{ color: 'black', textAlign: 'center' }}>
//                 {category.name}
//               </Text>
//             </View>

//             <View>
//               <ScrollView horizontal>
//                 {
//                   category.collections.map(item => {
//                     console.log(item, 'asd')
//                     return (
//                       <ProductCard item={{ name: 'asd', price: 23 }} />
//                     )
//                   })
//                 }
//               </ScrollView>
//             </View>

//           </View>
//         ))
//       }
//     </View>
//   )
// };

// export default Home;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1
//   }
// })

/**
* This is the Home page
**/

// React native and others libraries imports
import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { gql } from 'graphql-request';
import graphcms from '../../graphCMS/graphCMS';

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
      <ScrollView>
        {
          varieties.map(item => (
            <View key={item.id}>
              <Text>{item.name}</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                  {
                    item.products.map(product => (
                      <ProductCard key={product.id} productImage={product?.image?.url} productName={product.name} productPrice={product.price} />
                    ))
                  }
                </View>
              </ScrollView>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

var categories = [
  {
    id: 1,
    title: 'MEN',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_489/v1500284127/pexels-photo-497848_yenhuf.jpg'
  },
  {
    id: 2,
    title: 'WOMEN',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_460/v1500284237/pexels-photo-324030_wakzz4.jpg'
  },
  {
    id: 3,
    title: 'KIDS',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_445/v1500284286/child-childrens-baby-children-s_shcevh.jpg'
  },
  {
    id: 4,
    title: 'ACCESORIES',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_467/v1500284346/pexels-photo-293229_qxnjtd.jpg'
  }
];
export default Home;