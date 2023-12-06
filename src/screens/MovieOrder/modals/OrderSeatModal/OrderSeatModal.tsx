import React, { FC, useMemo } from "react";
import { Modal } from "antd";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducers/combineReducer.reducer";
import { onCancel, onOk, onShowModal } from "./OrderSeatModal.controller";

interface IProps {}

export const OrderSeatModal: FC<IProps> = React.memo(({}) => {
  const userChosenSeatId = useSelector(
    (state: IRootState) => state.movieOrder.userChosenSeatId,
    shallowEqual
  );
  const isLoading = useSelector(
    (state: IRootState) => state.movieOrder.requests.orderSeatRequest.isLoading,
    shallowEqual
  );

  const showModal = useMemo(
    () =>
      onShowModal({
        userChosenSeatId,
      }),
    [userChosenSeatId]
  );

  return (
    <>
      <Modal
        title="Order Seat"
        open={showModal}
        onOk={onOk}
        confirmLoading={isLoading}
        onCancel={onCancel}
        cancelButtonProps={{
          disabled: isLoading,
        }}
      >
        <p>Are you sure you want to order this seat?</p>
      </Modal>
    </>
  );
});
