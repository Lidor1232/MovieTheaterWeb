import { IDateRangeForm } from "./DateRange";
import store from "../../../../store/store";
import { homeGetMoviesScheduleSetDateRange } from "../../../../store/actions/home.actions";

export function onSubmit(dateRangeFormValues: IDateRangeForm) {
  store.dispatch(
    homeGetMoviesScheduleSetDateRange({
      dateRange: dateRangeFormValues,
    })
  );
}
