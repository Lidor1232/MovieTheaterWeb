import { ICreateMovieForm } from "../../CreateMovie";
import { onCreateMovie } from "../../../../store/services/createMovie.service";
import { toast } from "react-toastify";

export function onNormalizeFormValues({
  movieFormValues,
}: {
  movieFormValues: ICreateMovieForm;
}): {
  title: string;
  description: string;
  durationInMinutes: number;
} {
  return {
    ...movieFormValues,
    durationInMinutes: Number(movieFormValues.durationInMinutes),
  };
}

export function onShowCreateMovieToast() {
  toast("Created Movie!", {
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
  movieFormValues,
  reset,
}: {
  movieFormValues: ICreateMovieForm;
  reset: () => void;
}) {
  const normalizedMovieFormValues = onNormalizeFormValues({
    movieFormValues,
  });
  await onCreateMovie({
    createMovieValues: normalizedMovieFormValues,
  });
  onShowCreateMovieToast();
  reset();
}
