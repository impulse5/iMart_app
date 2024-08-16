import axios from "axios";

export const API_URL = axios.create({
  baseURL:
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZDc0ODRjMzEtMTE5MC00MDE5LTgyYTctMTI0ZDk4YzY4NTkzIiwiZXhwIjoxNzI1MDIyNzU3fQ.xpALb-fMxsixNA2ZJLKDBuGBnL9JxIE-wKdhbmt939c",
  timeout: 10000,
});

API_URL.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZDc0ODRjMzEtMTE5MC00MDE5LTgyYTctMTI0ZDk4YzY4NTkzIiwiZXhwIjoxNzI1MDIyNzU3fQ.xpALb-fMxsixNA2ZJLKDBuGBnL9JxIE-wKdhbmt939c";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
