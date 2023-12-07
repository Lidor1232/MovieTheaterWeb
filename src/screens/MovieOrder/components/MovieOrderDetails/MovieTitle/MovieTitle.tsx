import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../../store/reducers/combineReducer.reducer";

interface IProps {}

export const MovieTitle: FC<IProps> = React.memo(({}) => {
  const title = useSelector(
    (state: IRootState) =>
      state.movieOrder.requests.movieScheduleDetailsRequest.movieSchedule?.movie
        .title,
    shallowEqual
  );

  return <h2>{title}</h2>;
});
