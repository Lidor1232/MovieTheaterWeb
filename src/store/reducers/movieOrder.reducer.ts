import { IMovieSchedule, ISeat } from "../../utills/types";
import {
  MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_FAIL,
  MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_REQUEST,
  MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_SUCCESS,
  MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_FAIL,
  MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_REQUEST,
  MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_SUCCESS,
  MOVIE_ORDER_PAGE_ORDER_SEAT_FETCH_FAIL,
  MOVIE_ORDER_PAGE_ORDER_SEAT_FETCH_REQUEST,
  MOVIE_ORDER_PAGE_ORDER_SEAT_FETCH_SUCCESS,
  MOVIE_ORDER_PAGE_SET_MOVIE_SCHEDULE_ID,
  MOVIE_ORDER_PAGE_SET_USER_CHOSEN_SEAT_ID,
} from "../actions/movieOrder.actions";

export interface IState {
  movieScheduleId: string | null;
  userChosenSeatId: string | null;
  requests: {
    movieScheduleDetailsRequest: {
      isLoading: boolean;
      isError: boolean;
      movieSchedule: IMovieSchedule | null;
    };
    seatsRequest: {
      isLoading: boolean;
      isError: boolean;
      seats: ISeat[];
    };
    orderSeatRequest: {
      isLoading: boolean;
      isError: boolean;
      isSuccess: boolean;
    };
  };
}

export interface IAction {
  type: string;
  payload: any;
}

export const initialState: IState = {
  movieScheduleId: null,
  userChosenSeatId: null,
  requests: {
    movieScheduleDetailsRequest: {
      isLoading: false,
      isError: false,
      movieSchedule: null,
    },
    seatsRequest: {
      isLoading: false,
      isError: false,
      seats: [],
    },
    orderSeatRequest: {
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
  },
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case MOVIE_ORDER_PAGE_SET_MOVIE_SCHEDULE_ID:
      return {
        ...state,
        movieScheduleId: action.payload.movieScheduleId,
      };

    case MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          movieScheduleDetailsRequest: {
            ...state.requests.movieScheduleDetailsRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          movieScheduleDetailsRequest: {
            ...state.requests.movieScheduleDetailsRequest,
            isLoading: false,
            movieSchedule: action.payload.movieSchedule,
          },
        },
      };

    case MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          movieScheduleDetailsRequest: {
            ...state.requests.movieScheduleDetailsRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          seatsRequest: {
            ...state.requests.seatsRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          seatsRequest: {
            ...state.requests.seatsRequest,
            isLoading: false,
            seats: action.payload.seats,
          },
        },
      };

    case MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          seatsRequest: {
            ...state.requests.seatsRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case MOVIE_ORDER_PAGE_SET_USER_CHOSEN_SEAT_ID:
      return {
        ...state,
        userChosenSeatId: action.payload.userChosenSeatId,
      };

    case MOVIE_ORDER_PAGE_ORDER_SEAT_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          orderSeatRequest: {
            ...state.requests.orderSeatRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case MOVIE_ORDER_PAGE_ORDER_SEAT_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          orderSeatRequest: {
            ...state.requests.orderSeatRequest,
            isLoading: false,
            isSuccess: true,
          },
        },
      };

    case MOVIE_ORDER_PAGE_ORDER_SEAT_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          orderSeatRequest: {
            ...state.requests.orderSeatRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    default:
      return state;
  }
};
