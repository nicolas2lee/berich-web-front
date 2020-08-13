import {AUTHENTICATED, AUTHENTICATING} from "./AuthAction";

const initialState = {
    authenticated: false,
    loading: false,
    error: null,
    token: null
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTHENTICATING:
            console.log(action)
            return Object.assign({}, state, {
                authenticated: false,
                loading: true
            });
        case AUTHENTICATED:
            return Object.assign({}, state, {
                authenticated: true,
                token: action.payload.token,
                loading: false
            });
        default:
            return state
    }
};

export default authReducer