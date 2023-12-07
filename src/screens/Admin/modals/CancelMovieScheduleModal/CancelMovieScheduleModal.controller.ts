import store from "../../../../store/store";
import { adminCancelMovieScheduleSetMovieScheduleId } from "../../../../store/actions/admin.actions";
import { onCancelMovieSchedule } from "../../../../store/services/admin.service";
import { toast } from "react-toastify";

export function onShowCancelledMovieToast(): void {
  toast("Cancelled Movie!", {
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

export async function onOk(): Promise<void> {
  await onCancelMovieSchedule();
  store.dispatch(
    adminCancelMovieScheduleSetMovieScheduleId({
      movieScheduleId: null,
    })
  );
  onShowCancelledMovieToast();
}

export function onCancel() {
  store.dispatch(
    adminCancelMovieScheduleSetMovieScheduleId({
      movieScheduleId: null,
    })
  );
}

export function onShowModal({
  movieScheduleId,
}: {
  movieScheduleId: string | null;
}): boolean {
  const showModal = !!movieScheduleId;
  return showModal;
}
