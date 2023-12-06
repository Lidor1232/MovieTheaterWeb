import { combineReducers } from "redux";
import { reducer as homeReducer } from "./home.reducer";

export default combineReducers({
  home: homeReducer,
});
