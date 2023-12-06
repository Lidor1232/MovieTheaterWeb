import React, { FC, useCallback } from "react";
import { ISeat } from "../../../../../utills/types";
import styles from "./SeatItem.module.scss";
import { useNavigate } from "react-router-dom";

interface IProps {
  item: ISeat;
}

export const SeatItem: FC<IProps> = React.memo(({ item }) => {
  const navigate = useNavigate();

  const _onClick = useCallback(() => {
    navigate(`/movie/order/seat/${item._id}`);
  }, [navigate]);

  return (
    <div
      onClick={_onClick}
      className={`${styles.container} ${
        item.isOrdered
          ? styles.seatOrderedContainer
          : styles.seatNotOrderedContainer
      }`}
    >
      <h4>{item.numOfSeat}</h4>
    </div>
  );
});