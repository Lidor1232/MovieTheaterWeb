import {
  IMovie,
  IMovieSchedule,
  IMovieScheduleStatus,
  IMovieStatus,
  ISeat,
} from "../../utills/types";
import { movieTheaterAxios } from "./api-config";

export async function createMovie({
  movie,
}: {
  movie: {
    title: string;
    description: string;
    durationInMinutes: number;
  };
}): Promise<IMovie> {
  const res = await movieTheaterAxios({
    method: "POST",
    url: "/movie",
    data: {
      ...movie,
    },
  });
  return res.data;
}

export async function updateMovie({
  updateMovie,
  movieId,
}: {
  movieId: string;
  updateMovie: {
    title?: string;
    description?: string;
    durationInMinutes?: number;
    status?: IMovieStatus;
  };
}): Promise<{ message: string }> {
  const res = await movieTheaterAxios({
    method: "PUT",
    url: `/movie/${movieId}`,
    data: {
      ...updateMovie,
    },
  });
  return res.data;
}

export interface GetMoviesScheduleResponse {
  moviesSchedule: {
    _id: string;
    movie: IMovie;
    startDate: string;
    status: IMovieScheduleStatus;
  }[];
}

export async function getMoviesSchedule({
  startDate,
  endDate,
  sortBy,
  page,
}: {
  startDate?: string;
  endDate?: string;
  page: number;
  sortBy?: string;
}): Promise<GetMoviesScheduleResponse> {
  const res = await movieTheaterAxios({
    method: "POST",
    url: "/movies/schedule",
    params: {
      page,
      sortBy,
    },
    data: {
      terms: {
        startDate,
        endDate,
      },
    },
  });
  return res.data;
}

export async function createMovieSchedule({
  movieSchedule,
}: {
  movieSchedule: {
    movie: string;
    date: string;
  };
}): Promise<IMovieSchedule> {
  const res = await movieTheaterAxios({
    method: "POST",
    url: "/movie/schedule/create",
    data: {
      ...movieSchedule,
    },
  });
  return res.data;
}

export async function getMovieScheduleDetails({
  movieScheduleId,
}: {
  movieScheduleId: string;
}): Promise<IMovieSchedule> {
  const res = await movieTheaterAxios({
    method: "GET",
    url: `/movie/schedule/${movieScheduleId}/details`,
  });
  return res.data;
}

export async function cancelMovieSchedule({
  movieScheduleId,
}: {
  movieScheduleId: string;
}): Promise<{ message: string }> {
  const res = await movieTheaterAxios({
    method: "PATCH",
    url: `/movie/schedule/${movieScheduleId}/cancel`,
  });
  return res.data;
}

export interface IGetMovieScheduleSeatsResponse {
  movieScheduleId: string;
  seats: ISeat[];
}

export async function getMovieScheduleSeats({
  movieScheduleId,
}: {
  movieScheduleId: string;
}): Promise<IGetMovieScheduleSeatsResponse> {
  const res = await movieTheaterAxios({
    method: "GET",
    url: `/movie/schedule/${movieScheduleId}/seats`,
  });
  return res.data;
}

export async function orderSeat({
  seatId,
}: {
  seatId: string;
}): Promise<{ message: string }> {
  const res = await movieTheaterAxios({
    method: "POST",
    url: "/movie/schedule/seat/order",
    data: {
      seatId,
    },
  });
  return res.data;
}

export async function deleteMovie({
  movieId,
}: {
  movieId: string;
}): Promise<{ message: string }> {
  const res = await movieTheaterAxios({
    method: "DELETE",
    url: `/movie/${movieId}`,
  });
  return res.data;
}
