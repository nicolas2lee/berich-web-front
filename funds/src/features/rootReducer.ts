import {combineReducers} from "redux";
import fundsReducer from "./fund/fundsReducer";
import fundDetailReducer from "./fund/detail/fundDetailReducer";
import authReducer from "./common/auth/AuthReducer";

export default combineReducers({
    fundsReducer,
    fundDetailReducer,
    authReducer
})