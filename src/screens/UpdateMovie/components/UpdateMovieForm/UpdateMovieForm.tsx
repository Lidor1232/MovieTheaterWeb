import React, { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { ICreateMovieForm } from "../../../CreateMovie/CreateMovie";
import { onSubmit } from "./UpdateMovie.controller";
import { useParams } from "react-router-dom";
import { IUpdateMovieForm } from "../../UpdateMovie";

interface IProps {}

export const UpdateMovieForm: FC<IProps> = React.memo(({}) => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateMovieForm>();

  const _onSubmit = useCallback(
    (updateMovieValues: IUpdateMovieForm) => {
      onSubmit({
        movieId: params.movieId as string,
        updateMovieValues,
        reset,
      });
    },
    [params, reset]
  );

  return (
    <>
      <h1>Update Movie</h1>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <label>
          Title:
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </label>
        <br />
        <label>
          Duration:
          <input
            type="text"
            {...register("durationInMinutes", {
              required: "Duration is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Duration must be a number",
              },
            })}
          />
          {errors.durationInMinutes && (
            <span>{errors.durationInMinutes.message}</span>
          )}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
});
