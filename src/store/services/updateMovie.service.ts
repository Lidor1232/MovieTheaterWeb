import { IMovieStatus } from "../../utills/types";
import store from "../store";
import {
  updateMoviePageUpdateMovieFetchFail,
  updateMoviePageUpdateMovieFetchRequest,
  updateMoviePageUpdateMovieFetchSuccess,
} from "../actions/updateMovie.actions";
import { updateMovie } from "../../services/api/api";

export async function onUpdateMovie({
  updateMovieValues,
  movieId,
}: {
  movieId: string;
  updateMovieValues: {
    title?: string;
    description?: string;
    durationInMinutes?: number;
    status?: IMovieStatus;
  };
}): Promise<void> {
  try {
    store.dispatch(updateMoviePageUpdateMovieFetchRequest());
    await updateMovie({
      updateMovie: updateMovieValues,
      movieId,
    });
    store.dispatch(updateMoviePageUpdateMovieFetchSuccess());
  } catch {
    store.dispatch(updateMoviePageUpdateMovieFetchFail());
  }
}
