import React, { FC, useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducers/combineReducer.reducer";
import { Modal } from "antd";
import { onCancel, onOk, onShowModal } from "./DeleteMovieModal.controller";

interface IProps {}

export const DeleteMovieModal: FC<IProps> = React.memo(({}) => {
  const movieId = useSelector(
    (state: IRootState) => state.admin.requests.deleteMovieRequest.movieId,
    shallowEqual
  );
  const isLoading = useSelector(
    (state: IRootState) => state.admin.requests.deleteMovieRequest.isLoading,
    shallowEqual
  );

  const showModal = useMemo(() => onShowModal({ movieId }), [movieId]);

  return (
    <Modal
      title="Delete Movie"
      open={showModal}
      onOk={onOk}
      confirmLoading={isLoading}
      onCancel={onCancel}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <p>Are you sure you want to delete this movie?</p>
    </Modal>
  );
});
