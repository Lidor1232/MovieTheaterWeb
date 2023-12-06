import { onGetMoviesSchedule } from "../../store/services/home.service";

export function onMount(): void {
  onGetMoviesSchedule();
}
