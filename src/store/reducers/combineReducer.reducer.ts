import { combineReducers } from "redux";
import { reducer as homeReducer, IState as HomeState } from "./home.reducer";
import {
  reducer as movieOrderReducer,
  IState as MovieOrderState,
} from "./movieOrder.reducer";
import {
  reducer as createMovieReducer,
  IState as ICreateMovieState,
} from "./createMovie.reducer";

export default combineReducers({
  home: homeReducer,
  movieOrder: movieOrderReducer,
  createMovie: createMovieReducer,
});

export interface IRootState {
  home: HomeState;
  movieOrder: MovieOrderState;
  createMovie: ICreateMovieState;
}
