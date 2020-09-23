import {combineReducers} from "redux";
import fundsReducer from "./fund/fundsReducer";
import fundDetailReducer from "./fund/detail/fundDetailReducer";
import authReducer from "./common/auth/authReducer";
import dashboardReducer from "./dashboard/dashboardReducer";
import fundDetailLineChartReducer from "./fund/detail/linechart/fundDetailLineChartReducer";

export default combineReducers({
    fundsReducer,
    fundDetailReducer,
    fundDetailLineChartReducer,
    authReducer,
    dashboardReducer
})