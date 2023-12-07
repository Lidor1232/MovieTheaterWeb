import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducers/combineReducer.reducer";
import { onChangeSortBy } from "./SortBy.controller";

interface IProps {}

export const SortBy: FC<IProps> = React.memo(({}) => {
  const sortBy = useSelector(
    (state: IRootState) => state.home.requests.moviesScheduleRequest.sortBy,
    shallowEqual
  );

  return (
    <div>
      <h2>Sort by date:</h2>
      <>
        {sortBy === "startDate" ? (
          <button onClick={onChangeSortBy}>Date</button>
        ) : (
          <button onClick={onChangeSortBy}>-Date</button>
        )}
      </>
    </div>
  );
});
