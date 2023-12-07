import {
  HOME_GET_MOVIES_SCHEDULE_FETCH_ALL,
  HOME_GET_MOVIES_SCHEDULE_FETCH_FAIL,
  HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL,
  HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST,
  HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS,
  HOME_GET_MOVIES_SCHEDULE_FETCH_REQUEST,
  HOME_GET_MOVIES_SCHEDULE_FETCH_SUCCESS,
  HOME_GET_MOVIES_SCHEDULE_SET_DATE_RANGE,
  HOME_GET_MOVIES_SCHEDULE_SET_SORT_BY,
} from "../actions/home.actions";
import { IMovieSchedule } from "../../utills/types";

export interface IDateRange {
  startDate: string;
  endDate: string;
}

type IActionType =
  | typeof HOME_GET_MOVIES_SCHEDULE_FETCH_REQUEST
  | typeof HOME_GET_MOVIES_SCHEDULE_FETCH_SUCCESS
  | typeof HOME_GET_MOVIES_SCHEDULE_FETCH_FAIL
  | typeof HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST
  | typeof HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS
  | typeof HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL
  | typeof HOME_GET_MOVIES_SCHEDULE_FETCH_ALL;

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
      dateRange: IDateRange | null;
      page: number;
      isFetchAll: boolean;
      isLoadingMore: boolean;
      isLoadingMoreError: boolean;
      sortBy: string;
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
      sortBy: "startDate",
    },
  },
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case HOME_GET_MOVIES_SCHEDULE_FETCH_REQUEST:
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

    case HOME_GET_MOVIES_SCHEDULE_FETCH_SUCCESS:
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

    case HOME_GET_MOVIES_SCHEDULE_FETCH_FAIL:
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

    case HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST:
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

    case HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS:
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

    case HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL:
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

    case HOME_GET_MOVIES_SCHEDULE_FETCH_ALL:
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

    case HOME_GET_MOVIES_SCHEDULE_SET_SORT_BY:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            sortBy: action.payload.sortBy,
          },
        },
      };

    case HOME_GET_MOVIES_SCHEDULE_SET_DATE_RANGE:
      return {
        ...state,
        requests: {
          ...state.requests,
          moviesScheduleRequest: {
            ...state.requests.moviesScheduleRequest,
            dateRange: action.payload.dateRange,
          },
        },
      };

    default:
      return state;
  }
};
