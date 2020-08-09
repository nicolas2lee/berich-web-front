import {combineReducers} from "redux";
import fundsReducer from "./fund/fundsReducer";
import fundDetailReducer from "./fund/detail/fundDetailReducer";

export default combineReducers({
    fundsReducer,
    fundDetailReducer
})