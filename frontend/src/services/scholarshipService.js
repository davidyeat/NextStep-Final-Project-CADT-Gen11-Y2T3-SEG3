import api from "./api";

export const getScholarships = async () => {
  const response = await api.get("/scholarships");
  return response.data;
};

export const getAdminScholarships = async ({
  page = 1,
  limit = 10,
  search = "",
} = {}) => {
  const params = { page, limit };

  if (search?.trim()) {
    params.search = search.trim();
  }

  const response = await api.get("/scholarships", { params });
  return response.data;
};

export const getScholarshipById = async (id) => {
  const response = await api.get(`/scholarships/${id}`);
  return response.data;
};

export const getScholarshipFullDetail = async (id) => {
  const response = await api.get(`/scholarships/${id}/full`);
  return response.data;
};

export const createScholarship = async (scholarshipData) => {
  const response = await api.post("/scholarships", scholarshipData);
  return response.data;
};

export const updateScholarship = async (id, scholarshipData) => {
  const response = await api.put(`/scholarships/${id}`, scholarshipData);
  return response.data;
};

export const deleteScholarship = async (id) => {
  const response = await api.delete(`/scholarships/${id}`);
  return response.data;
};
