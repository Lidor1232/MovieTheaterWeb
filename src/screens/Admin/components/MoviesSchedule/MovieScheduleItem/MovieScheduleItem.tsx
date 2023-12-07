import React, { FC, useCallback } from "react";
import { IMovieSchedule } from "../../../../../utills/types";
import { useNavigate } from "react-router-dom";
import styles from "./MovieScheduleItem.module.scss";
import { Button } from "antd";
import {
  onClickAddMovieSchedule,
  onClickCancelMovie,
  onClickDeleteMovie,
  onClickUpdateMovieSchedule,
} from "./MovieScheduleItem.controller";

interface IProps {
  item: IMovieSchedule;
}

export const MovieScheduleItem: FC<IProps> = React.memo(({ item }) => {
  const navigate = useNavigate();

  const _onClickUpdateMovieSchedule = useCallback(() => {
    onClickUpdateMovieSchedule({
      item,
      navigate,
    });
  }, [navigate, item]);

  const _onClickDeleteMovie = useCallback(() => {
    onClickDeleteMovie({
      item,
    });
  }, [item]);

  const _onClickAddMovieSchedule = useCallback(() => {
    onClickAddMovieSchedule({
      item,
    });
  }, [item]);

  const _onClickCancelMovie = useCallback(() => {
    onClickCancelMovie({
      item,
    });
  }, [item]);

  return (
    <div className={styles.container}>
      <h2>{item.movie.title}</h2>
      <h3>{item.movie.description}</h3>
      <h3>Minutes: {item.movie.durationInMinutes}</h3>
      <h3>Movie Schedule Date: {item.startDate}</h3>
      <h3>Movie Schedule Status: {item.status}</h3>
      <Button className={styles.button} onClick={_onClickUpdateMovieSchedule}>
        Edit Movie
      </Button>
      <Button onClick={_onClickDeleteMovie} className={styles.button}>
        Delete Movie
      </Button>
      <Button className={styles.button} onClick={_onClickCancelMovie}>
        Cancel Movie Schedule
      </Button>
      <Button className={styles.button} onClick={_onClickAddMovieSchedule}>
        Schedule New Movie
      </Button>
    </div>
  );
});
