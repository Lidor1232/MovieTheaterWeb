import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducers/combineReducer.reducer";

interface IProps {}

export const MovieDuration: FC<IProps> = React.memo(({}) => {
  const movieDuration = useSelector(
    (state: IRootState) =>
      state.movieOrder.requests.movieScheduleDetailsRequest.movieSchedule?.movie
        .durationInMinutes,
    shallowEqual
  );

  return (
    <>
      <h3>Duration: {movieDuration}</h3>
    </>
  );
});
