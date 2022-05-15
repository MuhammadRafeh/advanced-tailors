import { combineReducers } from 'redux';
import CartItemModel from '../models/cartItemModel';
import { ADD_TO_CART, AUTHENTICATE, LOGOUT, REDUCE_FROM_CART, REMOVE_FROM_CART } from './actions';

const initialAuthState = {
  email: '',
  password: '',
  isAuth: false,
  whoIsUser: 'guest', //guest | tailor | customer
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        email: action.payload.email,
        isAuth: action.payload.password,
        whoIsUser:
          action.payload.isSkip == 'guest'
            ? 'guest'
            : action.payload.isSkip == 'tailor'
              ? 'tailor'
              : action.payload.isSkip == 'customer' && 'customer',
        isAuth: true,
      };
    case LOGOUT:
      return initialAuthState;
    default:
      return state;
  }
};

const initialStateCart = {
  items: []
}

const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {


    case ADD_TO_CART:
      let { id, quantity, price, name, img } = action.payload;
      const isAlreadyExist = state.items.findIndex(item => item.id == id);
      if (isAlreadyExist == -1) {
        return {
          items: [
            ...state.items,
            new CartItemModel(
              id,
              quantity,
              price,
              name,
              img
            )
          ]
        }
      } else {
        console.log('as')
        let { id, quantity, price, name, img } = state.items[isAlreadyExist];
        const newItems = [...state.items]
        newItems.splice(isAlreadyExist, 1,
          new CartItemModel(
            id,
            quantity + 1,
            price,
            name,
            img
          )
        )
        return {
          items: newItems
        }
      }

    case REDUCE_FROM_CART:
      const copyItems = [...state.items];
      const index = state.items.findIndex(item => item.id == action.payload.id);

      if (action.payload.quantity <= 0) {
        copyItems.splice(index, 1);
        return {
          items: copyItems
        }
      } else {
        const item = state.items[index];
        copyItems.splice(index, 1,
          new CartItemModel(
            item.id,
            action.payload.quantity,
            item.price,
            item.name,
            item.img
          )
        )
        return {
          items: copyItems
        }
      }


    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

export default rootReducer;
