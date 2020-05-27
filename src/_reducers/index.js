import profileReducer from "./profileReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    profile: profileReducer()
});

export default allReducers;