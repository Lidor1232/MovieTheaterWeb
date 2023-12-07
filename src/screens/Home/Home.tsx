import React, { FC, useEffect } from "react";
import { onMount } from "./Home.controller";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../store/reducers/combineReducer.reducer";
import { Loader } from "../../components/Loader/Loader";
import { MoviesSchedule } from "./MoviesSchedule/MoviesSchedule";

interface IProps {}

export const Home: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) => state.home.requests.moviesScheduleRequest.isLoading,
    shallowEqual
  );
  const isError = useSelector(
    (state: IRootState) => state.home.requests.moviesScheduleRequest.isError,
    shallowEqual
  );
  const sortBy = useSelector(
    (state: IRootState) => state.home.requests.moviesScheduleRequest.sortBy,
    shallowEqual
  );
  const dateRange = useSelector(
    (state: IRootState) => state.home.requests.moviesScheduleRequest.dateRange,
    shallowEqual
  );

  useEffect(() => {
    onMount({ sortBy, dateRange });
  }, [sortBy, dateRange]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h2>Something went wrong...</h2>
      ) : (
        <MoviesSchedule />
      )}
    </>
  );
});
