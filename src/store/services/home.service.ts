import store from "../store";
import {
  homeGetMoviesScheduleFetchAll,
  homeGetMoviesScheduleFetchFail,
  homeGetMoviesScheduleFetchMoreFail,
  homeGetMoviesScheduleFetchMoreRequest,
  homeGetMoviesScheduleFetchMoreSuccess,
  homeGetMoviesScheduleFetchRequest,
  homeGetMoviesScheduleFetchSuccess,
} from "../actions/home.actions";
import { getMoviesSchedule } from "../../services/api/api";

export async function onGetMoviesSchedule(): Promise<void> {
  try {
    store.dispatch(homeGetMoviesScheduleFetchRequest());
    const moviesScheduleRes = await getMoviesSchedule({
      page: 1,
    });
    if (moviesScheduleRes.moviesSchedule.length === 0) {
      store.dispatch(homeGetMoviesScheduleFetchAll());
    }
    store.dispatch(
      homeGetMoviesScheduleFetchSuccess({
        moviesSchedule: moviesScheduleRes.moviesSchedule,
      })
    );
  } catch {
    store.dispatch(homeGetMoviesScheduleFetchFail());
  }
}

export async function onGetNextMoviesSchedule(): Promise<void> {
  try {
    const isFetchAllMoviesSchedule =
      store.getState().home.requests.moviesScheduleRequest.isFetchAll;
    if (isFetchAllMoviesSchedule) {
      return;
    }
    store.dispatch(homeGetMoviesScheduleFetchMoreRequest());
    const nextPage = store.getState().home.requests.moviesScheduleRequest.page;
    const nextMoviesScheduleRes = await getMoviesSchedule({
      page: nextPage,
    });
    if (nextMoviesScheduleRes.moviesSchedule.length === 0) {
      store.dispatch(homeGetMoviesScheduleFetchAll());
    }
    store.dispatch(
      homeGetMoviesScheduleFetchMoreSuccess({
        moviesSchedule: nextMoviesScheduleRes.moviesSchedule,
      })
    );
  } catch {
    store.dispatch(homeGetMoviesScheduleFetchMoreFail());
  }
}
