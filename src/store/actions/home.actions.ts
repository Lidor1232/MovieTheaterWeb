import { IMovieSchedule } from "../../utills/types";

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
