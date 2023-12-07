import { IUpdateMovieForm } from "../../UpdateMovie";
import { onUpdateMovie } from "../../../../store/services/updateMovie.service";
import { IMovieStatus } from "../../../../utills/types";
import { toast } from "react-toastify";

export function onNormalizeUpdateMovie({
  updateMovieValues,
}: {
  updateMovieValues: IUpdateMovieForm;
}): {
  title?: string;
  description?: string;
  durationInMinutes?: number;
  status?: IMovieStatus;
} {
  return {
    ...updateMovieValues,
    durationInMinutes: Number(updateMovieValues.durationInMinutes),
  };
}

export function onShowUpdateMovieToast() {
  toast("Updated Movie!", {
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

export async function onSubmit({
  updateMovieValues,
  movieId,
  reset,
}: {
  updateMovieValues: IUpdateMovieForm;
  movieId: string;
  reset: () => void;
}): Promise<void> {
  const normalizedUpdateMovieValues = onNormalizeUpdateMovie({
    updateMovieValues,
  });
  await onUpdateMovie({
    updateMovieValues: normalizedUpdateMovieValues,
    movieId,
  });
  onShowUpdateMovieToast();
  reset();
}
