import React, { FC, useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducers/combineReducer.reducer";
import { onShowModal } from "./AddMovieScheduleModal.controller";
import { Modal } from "antd";
import { onCancel, onOk } from "./AddMovieScheduleModal.controller";
import { DatePicker, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import { ControllerRenderProps } from "react-hook-form/dist/types/controller";

interface IProps {}

export interface IAddMovieScheduleForm {
  date: string;
}

export const AddMovieScheduleModal: FC<IProps> = React.memo(({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddMovieScheduleForm>();

  const movieId = useSelector(
    (state: IRootState) => state.admin.requests.addMovieScheduleRequest.movieId,
    shallowEqual
  );
  const isLoading = useSelector(
    (state: IRootState) =>
      state.admin.requests.addMovieScheduleRequest.isLoading,
    shallowEqual
  );

  const showModal = useMemo(() => onShowModal({ movieId }), [movieId]);

  return (
    <Modal
      title="Add Movie Schedule"
      open={showModal}
      onOk={handleSubmit(onOk)}
      confirmLoading={isLoading}
      onCancel={onCancel}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <form onSubmit={handleSubmit(onOk)}>
        <Controller
          control={control}
          name="date"
          rules={{ required: "Date is required" }}
          render={({
            field,
          }: {
            field: ControllerRenderProps<IAddMovieScheduleForm, any>;
          }) => (
            <DatePicker
              {...field}
              showTime={{ format: "HH:mm" }}
              format="YYYY-MM-DD HH:mm"
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
        {errors.date ? <h2>{errors.date.message}</h2> : null}
      </form>
    </Modal>
  );
});
