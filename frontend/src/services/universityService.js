import api from "./api";

export const getUniversities = async() => {
    const response = await api.get("/universities");
    return response.data.universities;
}

export const getUniversityById = async (id) => {
    const response = await api.get(`/universities/${id}`);
    return response.data;
};

export const getUniversityFullDetail = async(id) => {
    const response = await api.get(`/universities/${id}/full`);
    return response.data;
}

export const createUniversity = async (universityData) => {
    const response = await api.post("/universities", universityData);
    return response.data;
};

export const updateUniversity = async (id, universityData) => {
    const response = await api.put(`/universities/${id}`, universityData);
    return response.data;
};

export const deleteUniversity = async (id) => {
    const response = await api.delete(`/universities/${id}`);
    return response.data;
};
