import { IMovieSchedule } from "../../utills/types";
import { IDateRange } from "../reducers/home.reducer";

export const HOME_GET_MOVIES_SCHEDULE_FETCH_REQUEST =
  "HOME_GET_MOVIES_SCHEDULE_FETCH_REQUEST";
export const HOME_GET_MOVIES_SCHEDULE_FETCH_SUCCESS =
  "HOME_GET_MOVIES_SCHEDULE_FETCH_SUCCESS";
export const HOME_GET_MOVIES_SCHEDULE_FETCH_FAIL =
  "HOME_GET_MOVIES_SCHEDULE_FETCH_FAIL";
export const HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST =
  "HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST";
export const HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS =
  "HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS";
export const HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL =
  "HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL";
export const HOME_GET_MOVIES_SCHEDULE_FETCH_ALL =
  "HOME_GET_MOVIES_SCHEDULE_FETCH_ALL";
export const HOME_GET_MOVIES_SCHEDULE_SET_SORT_BY =
  "HOME_GET_MOVIES_SCHEDULE_SET_SORT_BY";
export const HOME_GET_MOVIES_SCHEDULE_SET_DATE_RANGE =
  "HOME_GET_MOVIES_SCHEDULE_SET_DATE_RANGE";

export function homeGetMoviesScheduleFetchRequest() {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_FETCH_REQUEST,
  };
}

export function homeGetMoviesScheduleFetchSuccess(data: {
  moviesSchedule: IMovieSchedule[];
}) {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_FETCH_SUCCESS,
    payload: data,
  };
}

export function homeGetMoviesScheduleFetchFail() {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_FETCH_FAIL,
  };
}

export function homeGetMoviesScheduleFetchMoreRequest() {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST,
  };
}

export function homeGetMoviesScheduleFetchMoreSuccess(data: {
  moviesSchedule: IMovieSchedule[];
}) {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS,
    payload: data,
  };
}

export function homeGetMoviesScheduleFetchMoreFail() {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL,
  };
}

export function homeGetMoviesScheduleFetchAll() {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_FETCH_ALL,
  };
}

export function homeGetMoviesScheduleSetSortBy(data: { sortBy: string }) {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_SET_SORT_BY,
    payload: data,
  };
}

export function homeGetMoviesScheduleSetDateRange(data: {
  dateRange: IDateRange;
}) {
  return {
    type: HOME_GET_MOVIES_SCHEDULE_SET_DATE_RANGE,
    payload: data,
  };
}
