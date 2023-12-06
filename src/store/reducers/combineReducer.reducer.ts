import { combineReducers } from "redux";
import { reducer as homeReducer, IState as HomeState } from "./home.reducer";
import {
  reducer as movieOrderReducer,
  IState as MovieOrderState,
} from "./movieOrder.reducer";

export default combineReducers({
  home: homeReducer,
  movieOrder: movieOrderReducer,
});

export interface IRootState {
  home: HomeState;
  movieOrder: MovieOrderState;
}
