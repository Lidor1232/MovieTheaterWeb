import { IMovieSchedule } from "../../utills/types";

export const ADMIN_GET_MOVIES_SCHEDULE_FETCH_REQUEST =
  "ADMIN_GET_MOVIES_SCHEDULE_FETCH_REQUEST";
export const ADMIN_GET_MOVIES_SCHEDULE_FETCH_SUCCESS =
  "ADMIN_GET_MOVIES_SCHEDULE_FETCH_SUCCESS";
export const ADMIN_GET_MOVIES_SCHEDULE_FETCH_FAIL =
  "ADMIN_GET_MOVIES_SCHEDULE_FETCH_FAIL";
export const ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST =
  "ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST";
export const ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS =
  "ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS";
export const ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL =
  "ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL";
export const ADMIN_GET_MOVIES_SCHEDULE_FETCH_ALL =
  "ADMIN_GET_MOVIES_SCHEDULE_FETCH_ALL";
export const ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_REQUEST =
  "ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_REQUEST";
export const ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_SUCCESS =
  "ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_SUCCESS";
export const ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_FAIL =
  "ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_FAIL";
export const ADMIN_ADD_MOVIE_SCHEDULE_FETCH_REQUEST =
  "ADMIN_ADD_MOVIE_SCHEDULE_FETCH_REQUEST";
export const ADMIN_ADD_MOVIE_SCHEDULE_FETCH_SUCCESS =
  "ADMIN_ADD_MOVIE_SCHEDULE_FETCH_SUCCESS";
export const ADMIN_ADD_MOVIE_SCHEDULE_FETCH_FAIL =
  "ADMIN_ADD_MOVIE_SCHEDULE_FETCH_FAIL";
export const ADMIN_DELETE_MOVIE_FETCH_REQUEST =
  "ADMIN_DELETE_MOVIE_FETCH_REQUEST";
export const ADMIN_DELETE_MOVIE_FETCH_SUCCESS =
  "ADMIN_DELETE_MOVIE_FETCH_SUCCESS";
export const ADMIN_DELETE_MOVIE_FETCH_FAIL = "ADMIN_DELETE_MOVIE_FETCH_FAIL";
export const ADMIN_CANCEL_MOVIE_SCHEDULE_SET_MOVIE_SCHEDULE_ID =
  "ADMIN_CANCEL_MOVIE_SCHEDULE_SET_MOVIE_SCHEDULE_ID";
export const ADMIN_DELETE_MOVIE_SET_MOVIE_ID =
  "ADMIN_DELETE_MOVIE_SET_MOVIE_ID";
export const ADMIN_ADD_MOVIE_SCHEDULE_SET_DATE =
  "ADMIN_ADD_MOVIE_SCHEDULE_SET_DATE";
export const ADMIN_ADD_MOVIE_SCHEDULE_SET_MOVIE_ID =
  "ADMIN_ADD_MOVIE_SCHEDULE_SET_MOVIE_ID";

export function adminGetMoviesScheduleFetchRequest() {
  return {
    type: ADMIN_GET_MOVIES_SCHEDULE_FETCH_REQUEST,
  };
}

export function adminGetMoviesScheduleFetchSuccess(data: {
  moviesSchedule: IMovieSchedule[];
}) {
  return {
    type: ADMIN_GET_MOVIES_SCHEDULE_FETCH_SUCCESS,
    payload: data,
  };
}

export function adminGetMoviesScheduleFetchFail() {
  return {
    type: ADMIN_GET_MOVIES_SCHEDULE_FETCH_FAIL,
  };
}

export function adminGetMoviesScheduleFetchMoreRequest() {
  return {
    type: ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_REQUEST,
  };
}

export function adminGetMoviesScheduleFetchMoreSuccess(data: {
  moviesSchedule: IMovieSchedule[];
}) {
  return {
    type: ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_SUCCESS,
    payload: data,
  };
}

export function adminGetMoviesScheduleFetchMoreFail() {
  return {
    type: ADMIN_GET_MOVIES_SCHEDULE_FETCH_MORE_FAIL,
  };
}

export function adminGetMoviesScheduleFetchAll() {
  return {
    type: ADMIN_GET_MOVIES_SCHEDULE_FETCH_ALL,
  };
}

export function adminCancelMovieScheduleFetchRequest() {
  return {
    type: ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_REQUEST,
  };
}

export function adminCancelMovieScheduleFetchSuccess() {
  return {
    type: ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_SUCCESS,
  };
}

export function adminCancelMovieScheduleFetchFail() {
  return {
    type: ADMIN_CANCEL_MOVIE_SCHEDULE_FETCH_FAIL,
  };
}

export function adminAddMovieScheduleFetchRequest() {
  return {
    type: ADMIN_ADD_MOVIE_SCHEDULE_FETCH_REQUEST,
  };
}

export function adminAddMovieScheduleFetchSuccess() {
  return {
    type: ADMIN_ADD_MOVIE_SCHEDULE_FETCH_SUCCESS,
  };
}

export function adminAddMovieScheduleFetchFail() {
  return {
    type: ADMIN_ADD_MOVIE_SCHEDULE_FETCH_FAIL,
  };
}

export function adminDeleteMovieFetchRequest() {
  return {
    type: ADMIN_DELETE_MOVIE_FETCH_REQUEST,
  };
}

export function adminDeleteMovieFetchSuccess() {
  return {
    type: ADMIN_DELETE_MOVIE_FETCH_SUCCESS,
  };
}

export function adminDeleteMovieFetchFail() {
  return {
    type: ADMIN_DELETE_MOVIE_FETCH_FAIL,
  };
}

export function adminCancelMovieScheduleSetMovieScheduleId(data: {
  movieScheduleId: string | null;
}) {
  return {
    type: ADMIN_CANCEL_MOVIE_SCHEDULE_SET_MOVIE_SCHEDULE_ID,
    payload: data,
  };
}

export function adminDeleteMovieSetMovieId(data: { movieId: string | null }) {
  return {
    type: ADMIN_DELETE_MOVIE_SET_MOVIE_ID,
    payload: data,
  };
}

export function adminAddMovieScheduleSetDate(data: { date: string | null }) {
  return {
    type: ADMIN_ADD_MOVIE_SCHEDULE_SET_DATE,
    payload: data,
  };
}

export function adminAddMovieScheduleSetMovieId(data: {
  movieId: string | null;
}) {
  return {
    type: ADMIN_ADD_MOVIE_SCHEDULE_SET_MOVIE_ID,
    payload: data,
  };
}
