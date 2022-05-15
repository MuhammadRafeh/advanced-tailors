export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const authenticate = (email = '', password = '', isSkip) => {
  // It will take credentials
  return {
    type: AUTHENTICATE,
    payload: {
      email,
      password,
      isSkip,
    },
  };
};

export const addToCart = (product) => {
  //Product is a object of class Product which has many properties
  console.log('asd', product)
  const { id, quantity, price, name, img } = product
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      quantity,
      price,
      name,
      img
    }
  };
};

export const removeFromCart = productId => { //It's a integer/number
  return {
    type: REMOVE_FROM_CART,
    payload: productId
  }
}
