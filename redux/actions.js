export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

export const authenticate = (email, password) => { // It will take credentials
    return {
        type: AUTHENTICATE,
        payload: {
            email,
            password
        }
    }
}
