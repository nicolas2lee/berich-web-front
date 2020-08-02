import {Fund} from "./FundModel";
import data from './../../mock/fund.json'

export const FETCHING_FUNDS_LIST = 'FETCHING_FUNDS_LIST';
export const FETCH_FUNDS_LIST_SUCCESS = 'FETCH_FUNDS_LIST_SUCCESS';
export const SORT_FUNDS_LIST = 'SORT_FUNDS_LIST';
/*
 * action creators
 */


export function fetchingFundsList() {
    return {
        type: FETCHING_FUNDS_LIST,
    }
}
export function fetchFundsListSuccess(funds: Fund[]) {
    console.log('fetch funds successfully');
    console.log(funds);
    return {
        type: FETCH_FUNDS_LIST_SUCCESS,
        payload: {
            funds: funds,
        }
    }
}


export function sortFundsList(orderBy: string) {
    return {
        type: SORT_FUNDS_LIST,
        payload: {
            orderBy: orderBy
        }
    }
}

export function fetchFunds() {
    // @ts-ignore
    return dispatch => {
        dispatch(fetchingFundsList)
        return fetch('http://localhost:8090/funds')
            .then(response => response.json())
            .then(x => console.log(x))
            .then(json => dispatch(fetchFundsListSuccess(json as unknown as Fund[])))
    }
}

export function mockFetchFunds() {
    console.log('in mock fetch funds')
    // @ts-ignore
    return dispatch => {
        dispatch(fetchingFundsList());
        dispatch(fetchFundsListSuccess(data as unknown as Fund[]))
    }
}