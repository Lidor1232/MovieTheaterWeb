import {
  ADMIN_ADD_MOVIE_SCHEDULE_FETCH_FAIL,
  ADMIN_ADD_MOVIE_SCHEDULE_FETCH_REQUEST,
  ADMIN_ADD_MOVIE_SCHEDULE_FETCH_SUCCESS,
  ADMIN_ADD_MOVIE_SCHEDULE_SET_DATE,
  ADMIN_ADD_MOVIE_SCHEDULE_SET_MOVIE_ID,
  ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_FAIL,
  ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_REQUEST,
  ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_SUCCESS,
  ADMIN_CANCEL_MOVIE_SCHEDULE_SET_MOVIE_SCHEDULE_ID,
  ADMIN_DELETE_MOVIE_FETCH_FAIL,
  ADMIN_DELETE_MOVIE_FETCH_REQUEST,
  ADMIN_DELETE_MOVIE_FETCH_SUCCESS,
  ADMIN_DELETE_MOVIE_SET_MOVIE_ID,
  ADMIN_GET_MOVIES_SCHEDULE_FETCH_ALL,
  ADMIN_GET_MOVIES_SCHEDULE_FETCH_FAIL,
  ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL,
  ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST,
  ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS,
  ADMIN_GET_MOVIES_SCHEDULE_FETCH_REQUEST,
  ADMIN_GET_MOVIES_SCHEDULE_FETCH_SUCCESS,
} from "../actions/admin.actions";
import { IMovieSchedule } from "../../utills/types"; // Update the import for admin actions

type IActionType =
  | typeof ADMIN_GET_MOVIES_SCHEDULE_FETCH_REQUEST
  | typeof ADMIN_GET_MOVIES_SCHEDULE_FETCH_SUCCESS
  | typeof ADMIN_GET_MOVIES_SCHEDULE_FETCH_FAIL
  | typeof ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST
  | typeof ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS
  | typeof ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL
  | typeof ADMIN_GET_MOVIES_SCHEDULE_FETCH_ALL;

interface IAction {
  type: any;
  payload?: any;
}

export interface IState {
  requests: {
    moviesScheduleRequest: {
      isLoading: boolean;
      isError: boolean;
      moviesSchedule: IMovieSchedule[];
      dateRange: {
        startDate: string;
        endDate: string;
      } | null;
      page: number;
      isFetchAll: boolean;
      isLoadingMore: boolean;
      isLoadingMoreError: boolean;
    };
    cancelMovieScheduleRequest: {
      movieScheduleId: string | null;
      isLoading: boolean;
      isError: boolean;
      isSuccess: boolean;
    };
    deleteMovieRequest: {
      movieId: string | null;
      isLoading: boolean;
      isError: boolean;
      isSuccess: boolean;
    };
    addMovieScheduleRequest: {
      date: string | null;
      movieId: string | null;
      isLoading: boolean;
      isError: boolean;
      isSuccess: boolean;
    };
  };
}

export const initialState: IState = {
  requests: {
    moviesScheduleRequest: {
      isLoading: false,
      isError: false,
      moviesSchedule: [],
      dateRange: null,
      page: 1,
      isFetchAll: false,
      isLoadingMore: false,
      isLoadingMoreError: false,
    },
    addMovieScheduleRequest: {
      date: null,
      movieId: null,
      isError: false,
      isSuccess: false,
      isLoading: false,
    },
    cancelMovieScheduleRequest: {
      movieScheduleId: null,
      isSuccess: false,
      isError: false,
      isLoading: false,
    },
    deleteMovieRequest: {
      movieId: null,
      isSuccess: false,
      isError: false,
      isLoading: false,
    },
  },
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADMIN_GET_MOVIES_SCHEDULE_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case ADMIN_GET_MOVIES_SCHEDULE_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            isLoading: false,
            moviesSchedule: action.payload.moviesSchedule,
          },
        },
      };

    case ADMIN_GET_MOVIES_SCHEDULE_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            page: state.requests.moviesScheduleRequest.page + 1,
            isLoadingMore: true,
            isLoadingMoreError: false,
          },
        },
      };

    case ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            isLoadingMore: false,
            moviesSchedule: [
              ...state.requests.moviesScheduleRequest.moviesSchedule,
              ...action.payload.moviesSchedule,
            ],
          },
        },
      };

    case ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            isLoadingMore: false,
            isLoadingMoreError: true,
          },
        },
      };

    case ADMIN_GET_MOVIES_SCHEDULE_FETCH_ALL:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            isFetchAll: true,
          },
        },
      };

    //  Start
    case ADMIN_ADD_MOVIE_SCHEDULE_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          addMovieScheduleRequest: {
            ...state.requests.addMovieScheduleRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case ADMIN_ADD_MOVIE_SCHEDULE_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          addMovieScheduleRequest: {
            ...state.requests.addMovieScheduleRequest,
            isLoading: false,
            isSuccess: true,
          },
        },
      };

    case ADMIN_ADD_MOVIE_SCHEDULE_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          addMovieScheduleRequest: {
            ...state.requests.addMovieScheduleRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          cancelMovieScheduleRequest: {
            ...state.requests.cancelMovieScheduleRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          cancelMovieScheduleRequest: {
            ...state.requests.cancelMovieScheduleRequest,
            isLoading: false,
            isSuccess: true,
          },
        },
      };

    case ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          cancelMovieScheduleRequest: {
            ...state.requests.cancelMovieScheduleRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case ADMIN_DELETE_MOVIE_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          deleteMovieRequest: {
            ...state.requests.deleteMovieRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case ADMIN_DELETE_MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          deleteMovieRequest: {
            ...state.requests.deleteMovieRequest,
            isLoading: false,
            isSuccess: true,
          },
        },
      };

    case ADMIN_DELETE_MOVIE_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          deleteMovieRequest: {
            ...state.requests.deleteMovieRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case ADMIN_CANCEL_MOVIE_SCHEDULE_SET_MOVIE_SCHEDULE_ID:
      return {
        ...state,
        requests: {
          ...state.requests,
          cancelMovieScheduleRequest: {
            ...state.requests.cancelMovieScheduleRequest,
            movieScheduleId: action.payload.movieScheduleId,
          },
        },
      };

    case ADMIN_DELETE_MOVIE_SET_MOVIE_ID:
      return {
        ...state,
        requests: {
          ...state.requests,
          deleteMovieRequest: {
            ...state.requests.deleteMovieRequest,
            movieId: action.payload.movieId,
          },
        },
      };

    case ADMIN_ADD_MOVIE_SCHEDULE_SET_DATE:
      return {
        ...state,
        requests: {
          ...state.requests,
          addMovieScheduleRequest: {
            ...state.requests.addMovieScheduleRequest,
            date: action.payload.date,
          },
        },
      };

    case ADMIN_ADD_MOVIE_SCHEDULE_SET_MOVIE_ID:
      return {
        ...state,
        requests: {
          ...state.requests,
          addMovieScheduleRequest: {
            ...state.requests.addMovieScheduleRequest,
            movieId: action.payload.movieId,
          },
        },
      };

    default:
      return state;
  }
};
