import api from "./api";

export const getAllAdmission = async() => {
    const response = await api.get("/admissions");
    return response.data;
}

export const getAdmissionById = async(id) => {
    const response = await api.get(`/admissions/${id}`)
    return response.data;
}