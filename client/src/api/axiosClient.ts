import axios from "axios";
import { BASE_URL } from "./const";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

// * axiosInstance
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = getAccessTokenFromLocalStorage();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
