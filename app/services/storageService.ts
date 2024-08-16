import { API_URL } from "../constants/api";

export const getProductById = async (id: any) => {
  try {
    const response = await API_URL.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o produto:", error);
    throw error;
  }
};
