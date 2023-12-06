import React, { FC } from "react";
import { CreateMovieForm } from "./components/CreateMovieForm/CreateMovieForm";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/combineReducer.reducer";
import { Loader } from "../../components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {}

export interface ICreateMovieForm {
  title: string;
  description: string;
  durationInMinutes: string;
}

export const CreateMovie: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) =>
      state.createMovie.requests.createMovieRequest.isLoading,
    shallowEqual
  );
  const isError = useSelector(
    (state: IRootState) =>
      state.createMovie.requests.createMovieRequest.isError,
    shallowEqual
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h1>Something went wrong...</h1>
      ) : (
        <CreateMovieForm />
      )}

      <ToastContainer />
    </>
  );
});
