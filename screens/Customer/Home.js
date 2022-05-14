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

import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Rating = ({ rating, maxRating }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array(rating)
        .fill(1)
        .map((el, index) => (
          <FAIcon name='star' size={20} color='#2e2e2e' />
        ))}
      {Array(maxRating - rating)
        .fill(1)
        .map((el, index) => (
          <FAIcon name='star-o' size={20} color='#2e2e2e' />
        ))}
    </View>
  );
};

export default function ProductScreen1() {

  const [isFavourite, setFavourite] = useState(false);
  const [size] = useState([
    { id: 0, label: 'S' },
    { id: 1, label: 'M' },
    { id: 2, label: 'L' },
    { id: 3, label: 'XL' },
  ]);

  const [selectedSize, setSelectedSize] = useState('M');

  const [productDescription] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.`
  );

  const [seeFullDescription, setSeeFullDescription] = useState(false);

  const [moreProducts] = useState([
    {
      id: 0,
      productName: 'Black Printed Tshirt',
      productPrice: 19.49,
      productImage:
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      id: 1,
      productName: 'Black Printed Top (Women)',
      productPrice: 19.49,
      productImage:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=90',
    },
    {
      id: 2,
      productName: 'White Solid Tshirt',
      productPrice: 34.99,
      productImage:
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      id: 3,
      productName: 'Black Solid Tshirt',
      productPrice: 34.99,
      productImage:
        'https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      id: 4,
      productName: 'Red Top (Women)',
      productPrice: 44.85,
      productImage:
        'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
  ]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={styles.header}>
        <Icon name='menu' size={30} />
        <Text style={styles.headerTitle}>Shop</Text>
        <Icon name='shopping-bag' size={26} />
      </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{ height: 500, resizeMode: 'cover' }}
            source={{
              uri:
                'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
        </View>
        <View style={styles.detailsView}>
          <View style={styles.productTitleView}>
            <Text style={styles.productTitle}>Men's OutCast T-Shirt</Text>
            <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
              <FAIcon name={isFavourite ? 'heart' : 'heart-o'} size={22} />
            </TouchableOpacity>
          </View>
          <View style={styles.productPriceView}>
            <Text style={styles.discountedPriceText}>$29.99</Text>
            <Text style={styles.actualPriceText}>$40.00</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Rating rating={4} maxRating={5} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: '2',
                marginBottom: 10,
              }}
            >
              Size:
            </Text>
            <View style={{ flexDirection: 'row' }}>
              {size.map((s) => (
                <TouchableOpacity
                  key={s.id}
                  style={
                    selectedSize === s.label ? styles.tagSelected : styles.tag
                  }
                  onPress={() => setSelectedSize(s.label)}
                >
                  <Text
                    style={
                      selectedSize === s.label
                        ? styles.tagLabelSelected
                        : styles.tagLabel
                    }
                  >
                    {s.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={[styles.buttonText, { color: '#111' }]}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
          <TouchableOpacity
            style={styles.productDescriptionHeader}
            onPress={() => setSeeFullDescription((prev) => !prev)}
          >
            <Text style={{ fontFamily: '2', fontSize: 18 }}>
              Product Description
            </Text>
            <TouchableOpacity
              onPress={() => setSeeFullDescription((prev) => !prev)}
            >
              {seeFullDescription ? (
                <Icon name='chevron-up' size={26} />
              ) : (
                <Icon name='chevron-down' size={26} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: '1' }}>
              {seeFullDescription
                ? `${productDescription}`
                : `${productDescription.split('\n')[0]}`}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontFamily: '2',
              fontSize: 20,
              marginHorizontal: 10,
            }}
          >
            More Products
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
              {moreProducts.map((item, key) => (
                <View style={{ width: 180, marginHorizontal: 10 }} key={key}>
                  <View style={styles.moreProductImageView}>
                    <Image
                      style={{ flex: 1 }}
                      source={{
                        uri: item.productImage,
                      }}
                    />
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <Text style={styles.moreProductName}>
                      {item.productName}
                    </Text>
                    <View style={styles.moreProductPriceView}>
                      <Text style={styles.moreProductPrice}>
                        ${item.productPrice}
                      </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Icon
                          style={styles.moreProductIcon}
                          name='heart'
                          size={18}
                        />
                        <Icon
                          style={styles.moreProductIcon}
                          name='shopping-bag'
                          size={18}
                        />
                        <Icon
                          style={styles.moreProductIcon}
                          name='share'
                          size={18}
                        />
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.moreProductBuyButton}>
                    <Text style={styles.moreProductBuyButtonText}>Buy</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 40 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderBottomColor: '#dfe4fe',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: '2',
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  productTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,
    fontFamily: '3',
  },
  productPriceView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPriceText: { fontFamily: '2', fontSize: 20 },
  actualPriceText: {
    color: '#222',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontFamily: 'MontserratRegular',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#111',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: '2',
  },
  tag: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    fontFamily: '2',
    color: '#333',
  },
  tagSelected: {
    backgroundColor: '#333',
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    fontFamily: '2',
    color: '#FFF',
  },
  productDescriptionHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4fe',
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
  },
  moreProductName: {
    fontFamily: '2',
    fontSize: 16,
  },
  moreProductPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
    fontFamily: 'MontserratRegular',
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: '#111',
    marginTop: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreProductBuyButtonText: {
    color: '#fff',
    fontFamily: '2',
    fontSize: 18,
  },
});
