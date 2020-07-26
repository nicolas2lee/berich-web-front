import {ajax} from "rxjs/ajax";

export const FETCH_FUNDS_LIST = 'FETCH_FUNDS_LIST';
export const FETCH_FUNDS_LIST_SUCCESS = 'FETCH_FUNDS_LIST_SUCCESS';
/*
 * action creators
 */

export function fetchFundList() {
    return {
        type: FETCH_FUNDS_LIST,
        payload: ''
    }
}


export function fetchingFundList() {
    return {
        type: FETCH_FUNDS_LIST,
        payload: ''
    }
}
export function fetchFundListSuccess(funds: any) {
    return {
        type: FETCH_FUNDS_LIST_SUCCESS,
        payload: {
            funds: funds
        }
    }
}


export function fetchFunds() {
    // @ts-ignore
    return dispatch => {
        dispatch(fetchingFundList)
        return fetch(`http://localhost:8090/funds`)
            .then(response => response.json())
            .then(json => dispatch(fetchFundListSuccess(json)))
    }
}