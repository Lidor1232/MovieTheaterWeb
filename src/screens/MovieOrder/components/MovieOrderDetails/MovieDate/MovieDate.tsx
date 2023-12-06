import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../../store/reducers/combineReducer.reducer";

interface IProps {}

export const MovieDate: FC<IProps> = React.memo(({}) => {
  const movieDate = useSelector(
    (state: IRootState) =>
      state.movieOrder.requests.movieScheduleDetailsRequest.movieSchedule
        ?.startDate,
    shallowEqual
  );

  return (
    <>
      <h3>Movie Date: {movieDate}</h3>
    </>
  );
});
