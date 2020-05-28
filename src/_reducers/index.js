import userProfile from "./profileReducer";
import userNews from "./profileNewsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    profile: userProfile,
    news: userNews
});

export default allReducers;