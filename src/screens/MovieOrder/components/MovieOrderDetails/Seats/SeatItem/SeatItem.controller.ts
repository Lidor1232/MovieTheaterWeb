import store from "../../../../../../store/store";
import { movieOrderPageSetUserChosenSeatId } from "../../../../../../store/actions/movieOrder.actions";
import { ISeat } from "../../../../../../utills/types";
import { toast } from "react-toastify";

export function onSeatAlreadyOrdered(): void {
  toast("Seat already ordered", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export function onSeatNotAlreadyOrdered({ item }: { item: ISeat }): void {
  store.dispatch(
    movieOrderPageSetUserChosenSeatId({
      userChosenSeatId: item._id,
    })
  );
}

export function onClick({ item }: { item: ISeat }): void {
  if (item.isOrdered) {
    onSeatAlreadyOrdered();
  } else {
    onSeatNotAlreadyOrdered({
      item,
    });
  }
}
