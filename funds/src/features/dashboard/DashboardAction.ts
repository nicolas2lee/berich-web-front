import {MenuElement} from "./DashboardModel";
import {Fund} from "../fund/FundModel";
import {ALL_FUNDS, MY_WATCH_LIST} from "./dashboardReducer";
import ALL_FUNDS_DATA from "../../mock/fund.json";
import MY_WATCH_LIST_DATA from "../../mock/watchlist.json";

export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const MENU_SELECTED = 'MENU_SELECTED';
export const FETCHING_FUNDS_LIST = 'FETCHING_FUNDS_LIST';
export const FETCH_FUNDS_LIST_SUCCESS = 'FETCH_FUNDS_LIST_SUCCESS';

export function openMenu() {
    return {
        type: OPEN_MENU,
    }
}

export function closeMenu() {
    return {
        type: CLOSE_MENU,
    }
}

export function menuSelected(menuElement: MenuElement){
    return {
        type: MENU_SELECTED,
        payload: {
            selectedMenuElement: menuElement
        }
    }
}

export function selectMenuWidget(menuElement: MenuElement){
    // @ts-ignore
    return dispatch => {
        dispatch(menuSelected(menuElement))
        dispatch(mockFetchFunds(menuElement))

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

export function mockFetchFunds(selectedWidget: MenuElement) {
    console.log('in mock fetch funds')
    // @ts-ignore
    return dispatch => {
        dispatch(fetchingFundsList());
        switch (selectedWidget){
            case ALL_FUNDS:
                dispatch(fetchFundsListSuccess(ALL_FUNDS_DATA as unknown as Fund[]))
                return;
            case MY_WATCH_LIST:
                dispatch(fetchFundsListSuccess(MY_WATCH_LIST_DATA as unknown as Fund[]))
                return;
            default:
                dispatch(fetchFundsListSuccess(ALL_FUNDS_DATA as unknown as Fund[]))
        }
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

export function fetchingFundsList() {
    return {
        type: FETCHING_FUNDS_LIST,
    }
}