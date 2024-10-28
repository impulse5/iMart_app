import axios, { AxiosError } from "axios";
import { LoginRequest, LoginResponse, LoginError } from "../types/authType";
import { api } from "../constants/api";
export const login = async (
  loginData: LoginRequest
): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>(`/users/login`, {
      user: loginData,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<LoginError>;
      if (axiosError.response && axiosError.response.data) {
        throw new Error(axiosError.response.data.message);
      }
    }
    throw new Error("Algo deu errado, tente novamente.");
  }
};
