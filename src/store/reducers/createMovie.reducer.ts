import { IMovie } from "../../utills/types";
import {
  CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_FAIL,
  CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_REQUEST,
  CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_SUCCESS,
} from "../actions/createMovie.actions";

export interface IState {
  requests: {
    createMovieRequest: {
      isLoading: boolean;
      isError: boolean;
      movie: IMovie | null;
    };
  };
}

export const initialState: IState = {
  requests: {
    createMovieRequest: {
      isLoading: false,
      isError: false,
      movie: null,
    },
  },
};

interface IAction {
  type: string;
  payload: any;
}

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          createMovieRequest: {
            ...state.requests.createMovieRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          createMovieRequest: {
            ...state.requests.createMovieRequest,
            isLoading: false,
            movie: action.payload.movie,
          },
        },
      };

    case CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          createMovieRequest: {
            ...state.requests.createMovieRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    default:
      return state;
  }
};
