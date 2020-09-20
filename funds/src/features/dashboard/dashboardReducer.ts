import {
    CLOSE_ACCOUNT_MENU,
    CLOSE_MENU,
    FETCH_FUNDS_LIST_SUCCESS,
    MENU_SELECTED,
    OPEN_ACCOUNT_MENU,
    OPEN_MENU
} from "./DashboardAction";
import {MenuElement} from "./DashboardModel";
import {FETCHING_FUNDS_LIST} from "../fund/FundsAction";

export const ALL_FUNDS = new MenuElement("All funds")
export const MY_WATCH_LIST = new MenuElement("My watch list")

const DASHBOARD_MENU = [
    ALL_FUNDS,
    MY_WATCH_LIST
]

const initialState = {
    open: true,
    accountMenuOpen: false,
    accountMenuAnchorEl: null,
    loading: false,
    error: null,
    menu: DASHBOARD_MENU,
    selectedWidget: MY_WATCH_LIST,
    funds: []
};

const dashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case OPEN_MENU:
            return Object.assign({}, state, {
                open: true
            });
        case CLOSE_MENU:
            return Object.assign({}, state, {
                open: false
            });
        case OPEN_ACCOUNT_MENU:
            return Object.assign({}, state, {
                accountMenuOpen: true,
                accountMenuAnchorEl: action.payload.anchorEl
            });
        case CLOSE_ACCOUNT_MENU:
            return Object.assign({}, state, {
                accountMenuOpen: false,
                accountMenuAnchorEl: null
            });
        case MENU_SELECTED:
            return Object.assign({}, state, {
                selectedWidget: action.payload.selectedMenuElement
            })
        case FETCHING_FUNDS_LIST:
            return Object.assign({}, state, {
                loading: true
            });
        case FETCH_FUNDS_LIST_SUCCESS:
            return Object.assign({}, state, {
                funds: action.payload.funds,
                loading: false
            });
        default:
            return state
    }
};

export default dashboardReducer