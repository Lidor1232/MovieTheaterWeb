import { compose } from "redux";

export interface IMovie {
  _id: string;
  title: string;
  description: string;
  durationInMinutes: number;
  status: IMovieStatus;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type IMovieStatus = "active" | "deleted";

export type IMovieScheduleStatus = "active" | "deleted" | "cancelled";

export interface IMovieSchedule {
  _id: string;
  movie: IMovie;
  startDate: string;
  status: IMovieScheduleStatus;
}

export interface ISeat {
  _id: string;
  isOrdered: boolean;
  numOfSeat: number;
}
