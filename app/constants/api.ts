import axios from "axios";

export const API_URL = axios.create({
  baseURL: "https://major-yaks-cough.loca.lt",
  timeout: 10000,
});

API_URL.interceptors.request.use(
  (config) => {
    const token = "seu-token-aqui";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
