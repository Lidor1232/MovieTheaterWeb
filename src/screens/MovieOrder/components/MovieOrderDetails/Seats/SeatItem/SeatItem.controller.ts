import store from "../../../../../../store/store";
import { movieOrderPageSetUserChosenSeatId } from "../../../../../../store/actions/movieOrder.actions";

export function onClick({ seatId }: { seatId: string }): void {
  store.dispatch(
    movieOrderPageSetUserChosenSeatId({
      userChosenSeatId: seatId,
    })
  );
}
