import { onGetMoviesSchedule } from "../../store/services/home.service";

export function onMount({ sortBy }: { sortBy: string }): void {
  onGetMoviesSchedule({ sortBy });
}
