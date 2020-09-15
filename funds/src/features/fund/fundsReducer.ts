import {SORT_FUNDS_LIST} from "./FundsAction";
import {Order} from "../common/table/Table";

const initialState = {
    order: Order.ASC,
    orderBy: 'code',
};

const fundsReducer = (state = initialState, action: any) => {
    switch (action.type) {
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

