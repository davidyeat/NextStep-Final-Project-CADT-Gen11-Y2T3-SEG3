import api from "./api";

export const getAdminMajors = async ({
  page = 1,
  limit = 10,
  search = "",
} = {}) => {
  const params = { page, limit };

  if (search?.trim()) {
    params.search = search.trim();
  }

  const response = await api.get("/majors", { params });
  return response.data;
};

export const createMajor = async (payload) => {
  const response = await api.post("/majors", payload);
  return response.data;
};

export const updateMajor = async (id, payload) => {
  const response = await api.put(`/majors/${id}`, payload);
  return response.data;
};

export const deleteMajor = async (id) => {
  await api.delete(`/majors/${id}`);
};
