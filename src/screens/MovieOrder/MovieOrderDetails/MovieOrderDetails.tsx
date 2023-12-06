import React, { FC } from "react";
import { MovieTitle } from "./MovieTitle/MovieTitle";
import { MovieDescription } from "./MovieDescription/MovieDescription";
import { MovieDuration } from "./MovieDuration/MovieDuration";
import { MovieDate } from "./MovieDate/MovieDate";
import { Seats } from "./Seats/Seats";

interface IProps {}

export const MovieOrderDetails: FC<IProps> = React.memo(({}) => {
  return (
    <>
      <MovieTitle />
      <MovieDescription />
      <MovieDuration />
      <MovieDate />
      <Seats />
    </>
  );
});
