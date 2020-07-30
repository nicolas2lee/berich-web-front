import {Fund} from "./FundModel";
import data from  './../../mock/fund.json'

export const FETCHING_FUNDS_LIST = 'FETCHING_FUNDS_LIST';
export const FETCH_FUNDS_LIST_SUCCESS = 'FETCH_FUNDS_LIST_SUCCESS';
/*
 * action creators
 */


export function fetchingFundList() {
    return {
        type: FETCHING_FUNDS_LIST,
    }
}
export function fetchFundListSuccess(funds: Fund[]) {
    console.log('fetch funds successfully');
    console.log(funds);
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
        return fetch('http://localhost:8090/funds')
            .then(response => response.json())
            .then(x => console.log(x))
            .then(json => dispatch(fetchFundListSuccess(json as unknown as Fund[])))
    }
}

export function mockFetchFunds() {
    console.log('in mock fetch funds')
    // @ts-ignore
    return dispatch => {
        dispatch(fetchingFundList());
        dispatch(fetchFundListSuccess(data as unknown as Fund[]))
    }
}