import store from "../store";
import {
  createMoviePageCreateMovieFetchFail,
  createMoviePageCreateMovieFetchRequest,
  createMoviePageCreateMovieFetchSuccess,
} from "../actions/createMovie.actions";
import { createMovie } from "../../services/api/api";

export async function onCreateMovie({
  createMovieValues,
}: {
  createMovieValues: {
    title: string;
    description: string;
    durationInMinutes: number;
  };
}): Promise<void> {
  try {
    store.dispatch(createMoviePageCreateMovieFetchRequest());
    const movie = await createMovie({
      movie: createMovieValues,
    });
    store.dispatch(createMoviePageCreateMovieFetchSuccess({ movie }));
  } catch {
    store.dispatch(createMoviePageCreateMovieFetchFail());
  }
}
