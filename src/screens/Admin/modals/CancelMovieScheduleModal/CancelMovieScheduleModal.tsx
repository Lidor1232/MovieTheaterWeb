import React, { FC, useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducers/combineReducer.reducer";
import { Modal } from "antd";
import {
  onCancel,
  onOk,
  onShowModal,
} from "./CancelMovieScheduleModal.controller";

interface IProps {}

export const CancelMovieScheduleModal: FC<IProps> = React.memo(({}) => {
  const movieScheduleId = useSelector(
    (state: IRootState) =>
      state.admin.requests.cancelMovieScheduleRequest.movieScheduleId,
    shallowEqual
  );
  const isLoading = useSelector(
    (state: IRootState) =>
      state.admin.requests.cancelMovieScheduleRequest.isLoading,
    shallowEqual
  );

  const showModal = useMemo(
    () => onShowModal({ movieScheduleId }),
    [movieScheduleId]
  );

  return (
    <Modal
      title="Cancel Movie"
      open={showModal}
      onOk={onOk}
      confirmLoading={isLoading}
      onCancel={onCancel}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <p>Are you sure you want to cancel this movie?</p>
    </Modal>
  );
});
