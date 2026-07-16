import api from "./api";

export const getFavorites = async () => {
  const response = await api.get("/favorites");
  return response.data;
};

export const saveFavorite = async (type, id) => {
  const response = await api.post(`/favorites/${type}/${id}`);
  return response.data;
};

export const removeFavorite = async (type, id) => {
  await api.delete(`/favorites/${type}/${id}`);
};
