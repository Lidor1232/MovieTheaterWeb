import { IMovieSchedule } from "../../../../../utills/types";
import { NavigateFunction } from "react-router-dom";
import store from "../../../../../store/store";
import {
  adminAddMovieScheduleSetMovieId,
  adminCancelMovieScheduleSetMovieScheduleId,
  adminDeleteMovieSetMovieId,
} from "../../../../../store/actions/admin.actions";

export function onClickDeleteMovie({ item }: { item: IMovieSchedule }): void {
  store.dispatch(
    adminDeleteMovieSetMovieId({
      movieId: item.movie._id,
    })
  );
}

export function onClickCancelMovie({ item }: { item: IMovieSchedule }): void {
  store.dispatch(
    adminCancelMovieScheduleSetMovieScheduleId({
      movieScheduleId: item._id,
    })
  );
}

export function onClickAddMovieSchedule({
  item,
}: {
  item: IMovieSchedule;
}): void {
  store.dispatch(
    adminAddMovieScheduleSetMovieId({
      movieId: item.movie._id,
    })
  );
}

export function onClickUpdateMovieSchedule({
  item,
  navigate,
}: {
  item: IMovieSchedule;
  navigate: NavigateFunction;
}): void {
  navigate(`/admin/movie/${item.movie._id}/update`);
}
