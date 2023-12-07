import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../../store/reducers/combineReducer.reducer";

interface IProps {}

export const MovieDescription: FC<IProps> = React.memo(({}) => {
  const description = useSelector(
    (state: IRootState) =>
      state.movieOrder.requests.movieScheduleDetailsRequest.movieSchedule?.movie
        .description,
    shallowEqual
  );

  return <h3>{description}</h3>;
});
