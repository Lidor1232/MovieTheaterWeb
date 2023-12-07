import React, { FC, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/combineReducer.reducer";
import { onMount } from "./Admin.controller";
import { Loader } from "../../components/Loader/Loader";
import { MoviesSchedule } from "./components/MoviesSchedule/MoviesSchedule";
import { DeleteMovieModal } from "./modals/DeleteMovieModal/DeleteMovieModal";
import { CancelMovieScheduleModal } from "./modals/CancelMovieScheduleModal/CancelMovieScheduleModal";
import { AddMovieScheduleModal } from "./modals/AddMovieScheduleModal/AddMovieScheduleModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {}

export const Admin: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) => state.admin.requests.moviesScheduleRequest.isLoading,
    shallowEqual
  );
  const isError = useSelector(
    (state: IRootState) => state.admin.requests.moviesScheduleRequest.isError,
    shallowEqual
  );

  useEffect(() => {
    onMount();
  }, []);

  return (
    <>
      <>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <h2>Something went wrong...</h2>
        ) : (
          <MoviesSchedule />
        )}
      </>

      <DeleteMovieModal />
      <CancelMovieScheduleModal />
      <AddMovieScheduleModal />

      <ToastContainer />
    </>
  );
});
