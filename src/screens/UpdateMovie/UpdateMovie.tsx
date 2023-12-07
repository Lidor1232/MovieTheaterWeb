import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/combineReducer.reducer";
import { Loader } from "../../components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { UpdateMovieForm } from "./components/UpdateMovieForm/UpdateMovieForm";
import "react-toastify/dist/ReactToastify.css";

interface IProps {}

export interface IUpdateMovieForm {
  title: string;
  description: string;
  durationInMinutes: string;
}

export const UpdateMovie: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) =>
      state.updateMovie.requests.updateMovieRequest.isLoading,
    shallowEqual
  );
  const isError = useSelector(
    (state: IRootState) =>
      state.updateMovie.requests.updateMovieRequest.isError,
    shallowEqual
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h1>Something went wrong...</h1>
      ) : (
        <UpdateMovieForm />
      )}

      <ToastContainer />
    </>
  );
});
