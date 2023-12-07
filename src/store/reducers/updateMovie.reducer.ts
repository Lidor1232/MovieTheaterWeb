import {
  UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_FAIL,
  UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_REQUEST,
  UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_SUCCESS,
} from "../actions/updateMovie.actions"; // Import action types for updating a movie

export interface IState {
  requests: {
    updateMovieRequest: {
      isLoading: boolean;
      isError: boolean;
      isSuccess: boolean;
    };
  };
}

export const initialState: IState = {
  requests: {
    updateMovieRequest: {
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
  },
};

interface IAction {
  type: string;
  payload: any;
}

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateMovieRequest: {
            ...state.requests.updateMovieRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateMovieRequest: {
            ...state.requests.updateMovieRequest,
            isLoading: false,
            isSuccess: true,
          },
        },
      };

    case UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateMovieRequest: {
            ...state.requests.updateMovieRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    default:
      return state;
  }
};
