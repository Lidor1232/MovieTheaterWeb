export const UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_REQUEST =
  "UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_REQUEST";
export const UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_SUCCESS =
  "UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_SUCCESS";
export const UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_FAIL =
  "UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_FAIL";

export function updateMoviePageUpdateMovieFetchRequest() {
  return {
    type: UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_REQUEST,
  };
}

export function updateMoviePageUpdateMovieFetchSuccess() {
  return {
    type: UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_SUCCESS,
  };
}

export function updateMoviePageUpdateMovieFetchFail() {
  return {
    type: UPDATE_MOVIE_PAGE_UPDATE_MOVIE_FETCH_FAIL,
  };
}
