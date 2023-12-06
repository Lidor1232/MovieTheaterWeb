import React, { FC, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { onIsError, onIsLoading, onMount } from "./MovieOrder.controller";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/combineReducer.reducer";
import { Loader } from "../../components/Loader/Loader";
import { MovieOrderDetails } from "./MovieOrderDetails/MovieOrderDetails";

interface IProps {}

export const MovieOrder: FC<IProps> = React.memo(({}) => {
  const params = useParams();

  const isLoadingMovieScheduleDetails = useSelector(
    (state: IRootState) =>
      state.movieOrder.requests.movieScheduleDetailsRequest.isLoading,
    shallowEqual
  );
  const isLoadingSeats = useSelector(
    (state: IRootState) => state.movieOrder.requests.seatsRequest.isLoading,
    shallowEqual
  );
  const isErrorMovieScheduleDetails = useSelector(
    (state: IRootState) =>
      state.movieOrder.requests.movieScheduleDetailsRequest.isError,
    shallowEqual
  );
  const isErrorSeats = useSelector(
    (state: IRootState) => state.movieOrder.requests.seatsRequest.isError,
    shallowEqual
  );

  const isLoading = useMemo(
    () =>
      onIsLoading({
        isLoadingSeats,
        isLoadingMovieScheduleDetails,
      }),
    [isLoadingSeats, isLoadingMovieScheduleDetails]
  );
  const isError = useMemo(
    () =>
      onIsError({
        isErrorSeats,
        isErrorMovieScheduleDetails,
      }),
    [isErrorSeats, isErrorMovieScheduleDetails]
  );

  useEffect(() => {
    onMount({
      movieScheduleId: params.movieScheduleId as string,
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h1>Something went wrong...</h1>
      ) : (
        <MovieOrderDetails />
      )}
    </>
  );
});
