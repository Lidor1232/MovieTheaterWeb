import { combineReducers } from "redux";
import { reducer as homeReducer, IState as HomeState } from "./home.reducer";

export default combineReducers({
  home: homeReducer,
});

export interface IRootState {
  home: HomeState;
}
