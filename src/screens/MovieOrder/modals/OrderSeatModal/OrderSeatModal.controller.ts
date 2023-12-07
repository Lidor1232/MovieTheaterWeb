import store from "../../../../store/store";
import { movieOrderPageSetUserChosenSeatId } from "../../../../store/actions/movieOrder.actions";
import { onOrderSeat } from "../../../../store/services/movieOrder.service";
import { toast } from "react-toastify";

export function onShowModal({
  userChosenSeatId,
}: {
  userChosenSeatId: string | null;
}): boolean {
  const showModal = !!userChosenSeatId;
  return showModal;
}

export function onCancel(): void {
  store.dispatch(
    movieOrderPageSetUserChosenSeatId({
      userChosenSeatId: null,
    })
  );
}

export function onShowOrderedSeatToast() {
  toast("Success ordered seat!", {
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

export async function onOk() {
  await onOrderSeat();
  store.dispatch(
    movieOrderPageSetUserChosenSeatId({
      userChosenSeatId: null,
    })
  );
  onShowOrderedSeatToast();
}
