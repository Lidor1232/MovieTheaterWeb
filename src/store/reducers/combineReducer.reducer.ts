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
import {
  reducer as updateMovieReducer,
  IState as IUpdateMovieState,
} from "./updateMovie.reducer";
import {
  reducer as adminReducer,
  IState as IAdminState,
} from "./admin.reducer";

export default combineReducers({
  home: homeReducer,
  movieOrder: movieOrderReducer,
  createMovie: createMovieReducer,
  updateMovie: updateMovieReducer,
  admin: adminReducer,
});

export interface IRootState {
  home: HomeState;
  movieOrder: MovieOrderState;
  createMovie: ICreateMovieState;
  updateMovie: IUpdateMovieState;
  admin: IAdminState;
}
