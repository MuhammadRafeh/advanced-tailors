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
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { getSingleProduct } from '../../graphCMS/graphCMS';
import { addToCart } from '../../redux/actions';

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

export default function ProductDetail(props) {
    const dispatch = useDispatch();
    const { id, imageURL, name, price, varietyId, products } = props.route.params;
    const [isFavourite, setFavourite] = useState(false);
    const [size] = useState([
        { id: 0, label: 'S' },
        { id: 1, label: 'M' },
        { id: 2, label: 'L' },
        { id: 3, label: 'XL' },
    ]);
    const [image, setImage] = useState(imageURL);
    const [title, setTitle] = useState(name);
    const [actualPrice, setActualPrice] = useState(Math.floor(price + 253));
    const [discountPrice, setDiscountPrice] = useState(price);

    const getData = async () => {
        const data = await getSingleProduct(id);
        setProductDescription(data[0].description?.trim())
    }
    useEffect(() => {
        getData();
    }, [])
    const [selectedSize, setSelectedSize] = useState('M');

    const [productDescription, setProductDescription] = useState(' ');

    const [seeFullDescription, setSeeFullDescription] = useState(false);

    const [moreProducts, setMoreProducts] = useState(products.filter(item => item.id != id));

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
                            uri: image
                        }}
                    />
                </View>
                <View style={styles.detailsView}>
                    <View style={styles.productTitleView}>
                        <Text style={styles.productTitle}>{title}</Text>
                        <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
                            <FAIcon name={isFavourite ? 'heart' : 'heart-o'} size={22} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productPriceView}>
                        <Text style={styles.discountedPriceText}>${discountPrice}</Text>
                        <Text style={styles.actualPriceText}>${actualPrice}</Text>
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
                    <TouchableOpacity style={styles.addToCartButton} onPress={() => {
                        dispatch(
                            addToCart({ id, quantity: 1, price, name, img: imageURL })
                        );
                    }}>
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
                                : `${productDescription?.split('\n').slice(0)}`}
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
                                <ProductCard
                                    productImage={item.image?.url}
                                    productName={item.name}
                                    productPrice={item.price}
                                    buttonTitle={'Buy'}
                                    onPress={() => {
                                        console.log('asd')
                                        props.navigation.push('ProductDetail', {
                                            id: item.id,
                                            varietyId: varietyId,
                                            imageURL: item?.image?.url,
                                            name: item.name,
                                            price: item.price,
                                            products: products
                                        })
                                    }}
                                />
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
    }
});
