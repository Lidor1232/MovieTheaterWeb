import store from "../store";
import {
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
    store.dispatch(homeGetMoviesScheduleFetchMoreRequest());
    const nextMoviesScheduleRes = await getMoviesSchedule({
      page: 1,
    });
    store.dispatch(
      homeGetMoviesScheduleFetchMoreSuccess({
        moviesSchedule: nextMoviesScheduleRes.moviesSchedule,
      })
    );
  } catch {
    store.dispatch(homeGetMoviesScheduleFetchMoreFail());
  }
}
