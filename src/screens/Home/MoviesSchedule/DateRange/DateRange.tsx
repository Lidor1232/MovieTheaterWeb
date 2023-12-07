import React, { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducers/combineReducer.reducer";
import { Controller, useForm } from "react-hook-form";
import { ControllerRenderProps } from "react-hook-form/dist/types/controller";
import { DatePicker } from "antd";
import { onSubmit } from "./DateRange.controller";

interface IProps {}

export interface IDateRangeForm {
  startDate: string;
  endDate: string;
}

export const DateRange: FC<IProps> = React.memo(({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IDateRangeForm>();

  const dateRange = useSelector(
    (state: IRootState) => state.home.requests.moviesScheduleRequest.dateRange,
    shallowEqual
  );

  return (
    <>
      <h1>Date Range</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="startDate"
          rules={{ required: "Start Date is required" }}
          render={({
            field,
          }: {
            field: ControllerRenderProps<IDateRangeForm, any>;
          }) => (
            <DatePicker
              {...field}
              format="YYYY-MM-DD"
              onChange={(startDate) => field.onChange(startDate)}
            />
          )}
        />
        {errors.startDate ? <h2>{errors.startDate.message}</h2> : null}
        <Controller
          control={control}
          name="endDate"
          rules={{ required: "End Date is required" }}
          render={({
            field,
          }: {
            field: ControllerRenderProps<IDateRangeForm, any>;
          }) => (
            <DatePicker
              {...field}
              format="YYYY-MM-DD"
              onChange={(endDate) => field.onChange(endDate)}
            />
          )}
        />
        {errors.endDate ? <h2>{errors.endDate.message}</h2> : null}

        <button type={"submit"}>Submit</button>
      </form>
    </>
  );
});
