import { onGetMoviesSchedule } from "../../store/services/home.service";
import { IDateRange } from "../../store/reducers/home.reducer";

export function onMount({
  sortBy,
  dateRange,
}: {
  sortBy: string;
  dateRange: IDateRange | null;
}): void {
  onGetMoviesSchedule({ sortBy, dateRange });
}
