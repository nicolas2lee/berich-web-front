import { FETCH_FUNDS_LIST_SUCCESS, FETCHING_FUNDS_LIST} from "./FundsAction";

const initialState = {
    funds: [],
    loading: false,
    error: null
};

const fundsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCHING_FUNDS_LIST:
            return Object.assign({}, state, {
                loading: true
            });
        case FETCH_FUNDS_LIST_SUCCESS:
            console.log(action)
            return Object.assign({}, state, {
                funds: action.payload.funds,
                loading: false
            });
        default:
            return state
    }
};

export default fundsReducer

