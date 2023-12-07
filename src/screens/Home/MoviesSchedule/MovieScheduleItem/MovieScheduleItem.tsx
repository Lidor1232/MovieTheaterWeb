import React, { FC, useCallback, useMemo } from "react";
import styles from "./MovieScheduleItem.module.scss";
import { IMovieSchedule } from "../../../../utills/types";
import { onGetFormattedDate } from "../../../../utills/date/date";
import { useNavigate } from "react-router-dom";

interface IProps {
  item: IMovieSchedule;
}

export const MovieScheduleItem: FC<IProps> = React.memo(({ item }) => {
  const navigate = useNavigate();

  const formattedDate = useMemo(
    () =>
      onGetFormattedDate({
        date: item.startDate,
      }),
    [item]
  );

  const _onClick = useCallback(() => {
    navigate(`/movie/order/${item._id}`);
  }, [navigate]);

  return (
    <div onClick={_onClick} className={styles.container}>
      <h1>Title: {item.movie.title}</h1>
      <h2>Movie Schedule Status: {item.status}</h2>
      <h2>Movie Status: {item.movie.status}</h2>
      <h3>Date: {formattedDate}</h3>
      <h3>Duration In Minutes: {item.movie.durationInMinutes}</h3>
    </div>
  );
});
