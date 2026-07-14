import api from "./api";

export const getAdminUsers = async ({
  page = 1,
  limit = 10,
  search = "",
} = {}) => {
  const params = { page, limit };

  if (search?.trim()) {
    params.search = search.trim();
  }

  const response = await api.get("/users", { params });
  return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUserRole = async (id, payload) => {
  const response = await api.put(`/users/${id}`, payload);
  return response.data;
};

export const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);
};
