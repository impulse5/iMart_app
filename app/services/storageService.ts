import { api } from "../constants/api";

export const getProductById = async (id: any) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o produto:", error);
    throw error;
  }
};

export const postStorage = async (product_id: string, quantity: string) => {
  try {
    const response = await api.post(`/storages`, {
      storage: { product_id, quantity },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o produto:", error);
    throw error;
  }
};
