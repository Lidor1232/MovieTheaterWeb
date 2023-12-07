import store from "../../../../store/store";
import { homeGetMoviesScheduleSetSortBy } from "../../../../store/actions/home.actions";

export function onChangeSortBy() {
  const currentSortBy =
    store.getState().home.requests.moviesScheduleRequest.sortBy;
  const newSortBy = currentSortBy === "startDate" ? "-startDate" : "startDate";
  store.dispatch(
    homeGetMoviesScheduleSetSortBy({
      sortBy: newSortBy,
    })
  );
}
