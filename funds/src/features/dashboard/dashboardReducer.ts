import {CLOSE_MENU, MENU_SELECTED, menuSelected, OPEN_MENU} from "./DashboardAction";
import {DashboardMenu, MenuElement} from "./DashboardModel";

const ALL_FUNDS = new MenuElement("All funds")
const MY_WATCH_LIST = new MenuElement("My watch list")

const DASHBOARD_MENU = [
    ALL_FUNDS,
    MY_WATCH_LIST
]

const initialState = {
    open: true,
    loading: false,
    error: null,
    menu: DASHBOARD_MENU,
    selectedWidget: MY_WATCH_LIST
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
        case MENU_SELECTED:
            return Object.assign({}, state, {
                selectedWidget: action.payload.selectedMenuElement
            })
        default:
            return state
    }
};

export default dashboardReducer