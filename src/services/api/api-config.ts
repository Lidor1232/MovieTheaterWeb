import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const movieTheaterAxios = axios.create({
  baseURL: BASE_URL,
  validateStatus: (status: number) => status < 300,
});
