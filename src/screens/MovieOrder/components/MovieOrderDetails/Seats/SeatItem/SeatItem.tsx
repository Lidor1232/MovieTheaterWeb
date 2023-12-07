import React, { FC, useCallback } from "react";
import { ISeat } from "../../../../../../utills/types";
import styles from "./SeatItem.module.scss";
import { onClick } from "./SeatItem.controller";

interface IProps {
  item: ISeat;
}

export const SeatItem: FC<IProps> = React.memo(({ item }) => {
  const _onClick = useCallback(() => {
    onClick({
      item,
    });
  }, [item]);

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
