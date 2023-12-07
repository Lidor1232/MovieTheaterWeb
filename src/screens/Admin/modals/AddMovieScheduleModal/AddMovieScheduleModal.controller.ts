import { onAddMovieSchedule } from "../../../../store/services/admin.service";
import { toast } from "react-toastify";
import store from "../../../../store/store";
import {
  adminAddMovieScheduleSetDate,
  adminAddMovieScheduleSetMovieId,
} from "../../../../store/actions/admin.actions";
import { IAddMovieScheduleForm } from "./AddMovieScheduleModal";

export function onShowAddMovieScheduleToast(): void {
  toast("Add Movie Schedule!", {
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

export function onShowModal({ movieId }: { movieId: string | null }): boolean {
  const showModal = !!movieId;
  return showModal;
}

export async function onOk(
  addMovieFormValues: IAddMovieScheduleForm
): Promise<void> {
  store.dispatch(
    adminAddMovieScheduleSetDate({
      date: addMovieFormValues.date,
    })
  );
  await onAddMovieSchedule();
  store.dispatch(
    adminAddMovieScheduleSetMovieId({
      movieId: null,
    })
  );
  store.dispatch(
    adminAddMovieScheduleSetDate({
      date: null,
    })
  );
  onShowAddMovieScheduleToast();
}

export function onCancel(): void {
  store.dispatch(
    adminAddMovieScheduleSetMovieId({
      movieId: null,
    })
  );
  store.dispatch(
    adminAddMovieScheduleSetDate({
      date: null,
    })
  );
}
