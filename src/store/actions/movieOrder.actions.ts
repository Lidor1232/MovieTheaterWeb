import { IMovieSchedule, ISeat } from "../../utills/types";

export const MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_REQUEST =
  "MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_REQUEST";
export const MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_SUCCESS =
  "MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_SUCCESS";
export const MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_FAIL =
  "MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_FAIL";
export const MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_REQUEST =
  "MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_REQUEST";
export const MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_SUCCESS =
  "MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_SUCCESS";
export const MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_FAIL =
  "MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_FAIL";
export const MOVIE_ORDER_PAGE_SET_MOVIE_SCHEDULE_ID =
  "MOVIE_ORDER_PAGE_SET_MOVIE_SCHEDULE_ID";

export function movieOrderPageMovieScheduleDetailsFetchRequest() {
  return {
    type: MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_REQUEST,
  };
}

export function movieOrderPageMovieScheduleDetailsFetchSuccess(data: {
  movieSchedule: IMovieSchedule;
}) {
  return {
    type: MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_SUCCESS,
    payload: data,
  };
}

export function movieOrderPageMovieScheduleDetailsFetchFail() {
  return {
    type: MOVIE_ORDER_PAGE_MOVIE_SCHEDULE_DETAILS_FETCH_FAIL,
  };
}

export function movieOrderPageGetMovieScheduleSeatsFetchRequest() {
  return {
    type: MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_REQUEST,
  };
}

export function movieOrderPageGetMovieScheduleSeatsFetchSuccess(data: {
  seats: ISeat[];
}) {
  return {
    type: MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_SUCCESS,
    payload: data,
  };
}

export function movieOrderPageGetMovieScheduleSeatsFetchFail() {
  return {
    type: MOVIE_ORDER_PAGE_GET_MOVIE_SCHEDULE_SEATS_FETCH_FAIL,
  };
}

export function movieOrderPageSetMovieScheduleId(data: {
  movieScheduleId: string;
}) {
  return {
    type: MOVIE_ORDER_PAGE_SET_MOVIE_SCHEDULE_ID,
    payload: data,
  };
}
