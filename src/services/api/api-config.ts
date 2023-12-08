import axios from "axios";

export const BASE_URL =
  "http://movietheater-env.eba-ep4wnv7m.eu-central-1.elasticbeanstalk.com";

export const movieTheaterAxios = axios.create({
  baseURL: BASE_URL,
  validateStatus: (status: number) => status < 300,
});
