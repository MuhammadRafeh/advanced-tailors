import {combineReducers} from 'redux';
import {AUTHENTICATE, LOGOUT} from './actions';

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

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
