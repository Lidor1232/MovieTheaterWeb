import { onGetMoviesSchedule } from "../../store/services/admin.service";

export function onMount(): void {
  onGetMoviesSchedule();
}
