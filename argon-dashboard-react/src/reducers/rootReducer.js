import {combineReducers} from "redux";
import authReducer from "reducers/authReducer";
import statCardReducer from "reducers/statCardReducer";

export default combineReducers({
    authState: authReducer,
    statCardState: statCardReducer
});
