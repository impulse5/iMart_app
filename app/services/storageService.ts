import { api } from "../constants/api";

export const getProductById = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o produto:", error);
    throw error;
  }
};

export const getStorageById = async (id: string) => {
  try {
    const response = await api.get(`/storages/${id}`);
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

export const updateStorage = async (id: string, quantity: string) => {
  try {
    const response = await api.put(`/storages/${id}`, {
      storage: { quantity },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar o produto:", error);
    throw error;
  }
};

export const deleteStorage = async (id: string) => {
  try {
    const response = await api.delete(`/storages/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar o produto:", error);
    throw error;
  }
};

export const moveStorages = async (storageIds: string[]) => {
  try {
    const response = await api.put("/storages/mass_move", {
      storage_ids: storageIds,
    });
    console.log(storageIds);
    return response.data;
  } catch (error) {
    console.error("Erro ao mover os estoques:", error);
    throw error;
  }
};
