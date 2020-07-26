import {FETCH_FUNDS_LIST, FETCH_FUNDS_LIST_SUCCESS} from "./FundsAction";

const fundsReducer = (state = [], action: any) => {
    switch (action.type) {
        case FETCH_FUNDS_LIST:
            return state;
        case FETCH_FUNDS_LIST_SUCCESS:
            return Object.assign({}, state, {
                funds: action.payload.funds
            });
        default:
            return state
    }
};

export default fundsReducer

