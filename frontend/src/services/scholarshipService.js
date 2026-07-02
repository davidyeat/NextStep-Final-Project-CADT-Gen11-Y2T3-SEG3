import api from "./api";

export const getScholarships = async () => {
	const response = await api.get("/scholarships");
	return response.data;
};

export const getScholarshipById = async (id) => {
	const response = await api.get(`/scholarships/${id}`);
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
