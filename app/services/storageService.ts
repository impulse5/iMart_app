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

export const postStorage = async (id_produto: number) => {
  try {
    const response = await API_URL.post(`/storage/${id_produto}`, {
      quantity: id_produto,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o produto:", error);
    throw error;
  }
};
