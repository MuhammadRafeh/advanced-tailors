import { combineReducers } from "redux";
import {
    AUTHENTICATE,
    LOGOUT
} from "./actions";

const initialAuthState = {
    email: '',
    password: '',
    isAuth: false,
    isUserSkippedAuth: false
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                email: action.payload.email,
                isAuth: action.payload.password,
                isUserSkippedAuth: action.payload.isSkip ? true : false,
                isAuth: true,
            }
        case LOGOUT:
            return initialAuthState
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer
