import store from "../store";
import {
  cancelMovieSchedule,
  createMovieSchedule,
  deleteMovie,
  getMoviesSchedule,
} from "../../services/api/api";
import {
  adminAddMovieScheduleFetchFail,
  adminAddMovieScheduleFetchRequest,
  adminAddMovieScheduleFetchSuccess,
  adminCancelMovieScheduleFetchFail,
  adminCancelMovieScheduleFetchRequest,
  adminCancelMovieScheduleFetchSuccess,
  adminDeleteMovieFetchFail,
  adminDeleteMovieFetchRequest,
  adminDeleteMovieFetchSuccess,
  adminGetMoviesScheduleFetchAll,
  adminGetMoviesScheduleFetchFail,
  adminGetMoviesScheduleFetchMoreFail,
  adminGetMoviesScheduleFetchMoreRequest,
  adminGetMoviesScheduleFetchMoreSuccess,
  adminGetMoviesScheduleFetchRequest,
  adminGetMoviesScheduleFetchSuccess,
} from "../actions/admin.actions";

export async function onGetMoviesSchedule(): Promise<void> {
  try {
    store.dispatch(adminGetMoviesScheduleFetchRequest());
    const moviesScheduleRes = await getMoviesSchedule({
      page: 1,
    });
    if (moviesScheduleRes.moviesSchedule.length === 0) {
      store.dispatch(adminGetMoviesScheduleFetchAll());
    }
    store.dispatch(
      adminGetMoviesScheduleFetchSuccess({
        moviesSchedule: moviesScheduleRes.moviesSchedule,
      })
    );
  } catch {
    store.dispatch(adminGetMoviesScheduleFetchFail());
  }
}

export async function onGetNextMoviesSchedule(): Promise<void> {
  try {
    const isFetchAllMoviesSchedule =
      store.getState().admin.requests.moviesScheduleRequest.isFetchAll;
    if (isFetchAllMoviesSchedule) {
      return;
    }
    store.dispatch(adminGetMoviesScheduleFetchMoreRequest());
    const nextPage = store.getState().admin.requests.moviesScheduleRequest.page;
    const nextMoviesScheduleRes = await getMoviesSchedule({
      page: nextPage,
    });
    if (nextMoviesScheduleRes.moviesSchedule.length === 0) {
      store.dispatch(adminGetMoviesScheduleFetchAll());
    }
    store.dispatch(
      adminGetMoviesScheduleFetchMoreSuccess({
        moviesSchedule: nextMoviesScheduleRes.moviesSchedule,
      })
    );
  } catch {
    store.dispatch(adminGetMoviesScheduleFetchMoreFail());
  }
}

export async function onCancelMovieSchedule(): Promise<void> {
  try {
    store.dispatch(adminCancelMovieScheduleFetchRequest());
    const movieScheduleId =
      store.getState().admin.requests.cancelMovieScheduleRequest
        .movieScheduleId;
    await cancelMovieSchedule({
      movieScheduleId,
    });
    store.dispatch(adminCancelMovieScheduleFetchSuccess());
  } catch {
    store.dispatch(adminCancelMovieScheduleFetchFail());
  }
}

export async function onDeleteMovie() {
  try {
    store.dispatch(adminDeleteMovieFetchRequest());
    const movieId = store.getState().admin.requests.deleteMovieRequest.movieId;
    await deleteMovie({
      movieId,
    });
    store.dispatch(adminDeleteMovieFetchSuccess());
  } catch {
    store.dispatch(adminDeleteMovieFetchFail());
  }
}

export async function onAddMovieSchedule(): Promise<void> {
  try {
    store.dispatch(adminAddMovieScheduleFetchRequest());
    const movieId =
      store.getState().admin.requests.addMovieScheduleRequest.movieId;
    const date = store.getState().admin.requests.addMovieScheduleRequest.date;
    await createMovieSchedule({
      movieSchedule: {
        movie: movieId,
        date,
      },
    });
    store.dispatch(adminAddMovieScheduleFetchSuccess());
  } catch {
    store.dispatch(adminAddMovieScheduleFetchFail());
  }
}
