import {FundDetail} from "../FundModel";
import data from "../../../mock/fund-detail.json";

export const FETCHING_FUND_DETAIL = 'FETCHING_FUND_DETAIL';
export const FETCH_FUND_DETAIL_SUCCESS = 'FETCH_FUND_DETAIL_SUCCESS';
export const PREPARE_GRAPH_DATA = 'PREPARE_GRAPH_DATA';
export const TAB_VALUE_CHANGE = 'TAB_VALUE_CHANGE';

export function fetchingFundDetail() {
    return {
        type: FETCHING_FUND_DETAIL,
    }
}

export function fetchFundDetailSuccess(data: FundDetail[]) {
    console.log('fetch funds successfully');
    console.log(data);
    return {
        type: FETCH_FUND_DETAIL_SUCCESS,
        payload: {
            fundDetails: data,
        }
    }
}


export function fetchFundDetailByFundCode(fundCode: string) {
    // @ts-ignore
/*
    return dispatch => {
        dispatch(FETCHING_FUND_DETAIL)
        return fetch('http://localhost:8090/fund/'+fundCode)
            .then(response => response.json())
            .then(x => console.log(x))
            .then(json => dispatch(fetchFundDetailSuccess(json as unknown as FundDetail[])))
    }
*/
}


export function mockFundDetailByFundCode(fundCode: string) {
    console.log('in mock fetch funds')
    // @ts-ignore
    return dispatch => {
        dispatch(fetchingFundDetail());
        dispatch(fetchFundDetailSuccess(data as unknown as FundDetail[]))
    }
}

export function changeTab(newValue: number){
    return {
        type: TAB_VALUE_CHANGE,
        payload: {
            tabValue: newValue,
        }
    }
}