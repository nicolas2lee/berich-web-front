import {combineReducers} from "redux";
import fundsReducer from "./fund/fundsReducer";
import fundDetailReducer from "./fund/detail/fundDetailReducer";
import authReducer from "./common/auth/AuthReducer";
import dashboardReducer from "./dashboard/dashboardReducer";

export default combineReducers({
    fundsReducer,
    fundDetailReducer,
    authReducer,
    dashboardReducer
})