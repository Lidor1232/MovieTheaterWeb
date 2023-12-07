import { IMovie } from "../../utills/types";

export const CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_REQUEST =
  "CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_REQUEST";
export const CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_SUCCESS =
  "CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_SUCCESS";
export const CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_FAIL =
  "CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_FAIL";

export function createMoviePageCreateMovieFetchRequest() {
  return {
    type: CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_REQUEST,
  };
}

export function createMoviePageCreateMovieFetchSuccess(data: {
  movie: IMovie;
}) {
  return {
    type: CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_SUCCESS,
    payload: data,
  };
}

export function createMoviePageCreateMovieFetchFail() {
  return {
    type: CREATE_MOVIE_PAGE_CREATE_MOVIE_FETCH_FAIL,
  };
}
