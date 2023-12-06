import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducers/combineReducer.reducer";
import { SeatItem } from "./SeatItem/SeatItem";
import styles from "./Seats.module.scss";

interface IProps {}

export const Seats: FC<IProps> = React.memo(({}) => {
  const seats = useSelector(
    (state: IRootState) => state.movieOrder.requests.seatsRequest.seats,
    shallowEqual
  );

  return (
    <div>
      <h2>Seats:</h2>
      <div className={styles.seatsContainer}>
        {seats.map((seat) => (
          <SeatItem item={seat} key={seat._id} />
        ))}
      </div>
    </div>
  );
});
