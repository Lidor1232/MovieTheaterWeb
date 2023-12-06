import store from "../store";
import {
  movieOrderPageGetMovieScheduleSeatsFetchRequest,
  movieOrderPageGetMovieScheduleSeatsFetchSuccess,
  movieOrderPageMovieScheduleDetailsFetchFail,
  movieOrderPageMovieScheduleDetailsFetchRequest,
  movieOrderPageMovieScheduleDetailsFetchSuccess,
} from "../actions/movieOrder.actions";
import {
  getMovieScheduleDetails,
  getMovieScheduleSeats,
} from "../../services/api/api";

export async function onGetMovieScheduleDetails(): Promise<void> {
  try {
    store.dispatch(movieOrderPageMovieScheduleDetailsFetchRequest());
    const movieScheduleId = store.getState().movieOrder.movieScheduleId;
    const movieSchedule = await getMovieScheduleDetails({
      movieScheduleId,
    });
    store.dispatch(
      movieOrderPageMovieScheduleDetailsFetchSuccess({
        movieSchedule,
      })
    );
  } catch {
    store.dispatch(movieOrderPageMovieScheduleDetailsFetchFail());
  }
}

export async function onGetSeats(): Promise<void> {
  try {
    store.dispatch(movieOrderPageGetMovieScheduleSeatsFetchRequest());
    const movieScheduleId = store.getState().movieOrder.movieScheduleId;
    const seatsRes = await getMovieScheduleSeats({
      movieScheduleId,
    });
    store.dispatch(
      movieOrderPageGetMovieScheduleSeatsFetchSuccess({
        seats: seatsRes.seats,
      })
    );
  } catch {
    store.dispatch(movieOrderPageGetMovieScheduleSeatsFetchRequest());
  }
}
