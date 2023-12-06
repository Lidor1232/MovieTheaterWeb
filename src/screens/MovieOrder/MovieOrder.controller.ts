import {
  onGetMovieScheduleDetails,
  onGetSeats,
} from "../../store/services/movieOrder.service";
import store from "../../store/store";
import { movieOrderPageSetMovieScheduleId } from "../../store/actions/movieOrder.actions";

export function onMount({ movieScheduleId }: { movieScheduleId: string }) {
  store.dispatch(
    movieOrderPageSetMovieScheduleId({
      movieScheduleId,
    })
  );
  onGetMovieScheduleDetails();
  onGetSeats();
}

export function onIsLoading({
  isLoadingSeats,
  isLoadingMovieScheduleDetails,
}: {
  isLoadingMovieScheduleDetails: boolean;
  isLoadingSeats: boolean;
}): boolean {
  return isLoadingSeats || isLoadingMovieScheduleDetails;
}

export function onIsError({
  isErrorMovieScheduleDetails,
  isErrorSeats,
}: {
  isErrorMovieScheduleDetails: boolean;
  isErrorSeats: boolean;
}): boolean {
  return isErrorSeats || isErrorMovieScheduleDetails;
}
