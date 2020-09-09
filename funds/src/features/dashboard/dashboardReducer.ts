import {CLOSE_MENU, OPEN_MENU} from "./DashboardAction";

const initialState = {
    open: false,
    loading: false,
    error: null
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
        default:
            return state
    }
};

export default dashboardReducer