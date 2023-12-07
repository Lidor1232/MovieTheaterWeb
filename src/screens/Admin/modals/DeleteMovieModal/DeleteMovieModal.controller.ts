import store from "../../../../store/store";
import { adminDeleteMovieSetMovieId } from "../../../../store/actions/admin.actions";
import { onDeleteMovie } from "../../../../store/services/admin.service";
import { toast } from "react-toastify";

export function onShowCreateMovieToast(): void {
  toast("Deleted Movie!", {
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
  await onDeleteMovie();
  onShowCreateMovieToast();
  store.dispatch(adminDeleteMovieSetMovieId({ movieId: null }));
}

export function onCancel(): void {
  store.dispatch(adminDeleteMovieSetMovieId({ movieId: null }));
}

export function onShowModal({ movieId }: { movieId: string | null }): boolean {
  const showModal = !!movieId;
  return showModal;
}
