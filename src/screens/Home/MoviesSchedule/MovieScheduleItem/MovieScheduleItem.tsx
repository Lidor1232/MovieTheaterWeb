import React, { FC, useMemo } from "react";
import styles from "./MovieScheduleItem.module.scss";
import { IMovieSchedule } from "../../../../utills/types";
import { onGetFormattedDate } from "../../../../utills/date/date";

interface IProps {
  item: IMovieSchedule;
}

export const MovieScheduleItem: FC<IProps> = React.memo(({ item }) => {
  const formattedDate = useMemo(
    () =>
      onGetFormattedDate({
        date: item.startDate,
      }),
    [item]
  );

  return (
    <div className={styles.container}>
      <h1>{item.movie.title}</h1>
      <h2>{item.status}</h2>
      <h3>{formattedDate}</h3>
    </div>
  );
});
