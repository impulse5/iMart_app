import axios from "axios";
import { LoginRequest, LoginResponse, LoginError } from "../types/authType";
import { API_URL } from "../constants/api";
export const login = async (
  loginData: LoginRequest
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/users/login`, {
      user: loginData,
    });
    return response.data;
  } catch (error) {
    const err = error as { response?: { data?: LoginError } };
    throw new Error(err.response?.data?.message || "Erro ao fazer login");
  }
};
