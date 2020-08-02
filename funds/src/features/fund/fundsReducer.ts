import {FETCH_FUNDS_LIST_SUCCESS, FETCHING_FUNDS_LIST, SORT_FUNDS_LIST} from "./FundsAction";
import {Order} from "../common/table/Table";

const initialState = {
    funds: [],
    order: Order.ASC,
    orderBy: 'code',
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
        case SORT_FUNDS_LIST:
            return Object.assign({}, state, {
                orderBy: action.payload.orderBy,
                order: action.payload.orderBy === state.orderBy ? (state.order === Order.ASC ? Order.DESC : Order.ASC) : Order.ASC
            })
        default:
            return state
    }
};

export default fundsReducer

