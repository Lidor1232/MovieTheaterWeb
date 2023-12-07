import store from "../store";
import {
  movieOrderPageGetMovieScheduleSeatsFetchRequest,
  movieOrderPageGetMovieScheduleSeatsFetchSuccess,
  movieOrderPageMovieScheduleDetailsFetchFail,
  movieOrderPageMovieScheduleDetailsFetchRequest,
  movieOrderPageMovieScheduleDetailsFetchSuccess,
  movieOrderPageOrderSeatFetchFail,
  movieOrderPageOrderSeatFetchRequest,
  movieOrderPageOrderSeatFetchSuccess,
} from "../actions/movieOrder.actions";
import {
  getMovieScheduleDetails,
  getMovieScheduleSeats,
  orderSeat,
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

export async function onOrderSeat(): Promise<void> {
  try {
    store.dispatch(movieOrderPageOrderSeatFetchRequest());
    const userChosenSeatId = store.getState().movieOrder.userChosenSeatId;
    await orderSeat({
      seatId: userChosenSeatId,
    });
    store.dispatch(movieOrderPageOrderSeatFetchSuccess());
  } catch {
    store.dispatch(movieOrderPageOrderSeatFetchFail());
  }
}
