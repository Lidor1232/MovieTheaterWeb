import React, { FC } from "react";
import styles from "./MoviesSchedule.module.scss";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../store/reducers/combineReducer.reducer";
import { IMovieSchedule } from "../../../utills/types";
import { MovieScheduleItem } from "./MovieScheduleItem/MovieScheduleItem";
import { Footer } from "./Footer/Footer";
import { SortBy } from "./SortBy/SortBy";

interface IProps {}

export const MoviesSchedule: FC<IProps> = React.memo(() => {
  const moviesSchedule = useSelector(
    (state: IRootState) =>
      state.home.requests.moviesScheduleRequest.moviesSchedule,
    shallowEqual
  );

  return (
    <div className={styles.container}>
      <div>
        <h2>Filter by date Range: </h2>
        <></>
      </div>
      <SortBy />
      {moviesSchedule.map((movieSchedule: IMovieSchedule) => (
        <MovieScheduleItem item={movieSchedule} key={movieSchedule._id} />
      ))}
      <Footer />
    </div>
  );
});
