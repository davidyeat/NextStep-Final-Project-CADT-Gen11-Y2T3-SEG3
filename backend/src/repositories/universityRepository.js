import sequelize from "../config/database.js";
import University from "../models/university.js";

// Get all universities
export const getAllUniversities = async () => {
  try {
    const universities = await University.findAll();
    return universities;
  } catch (error) {
    console.error("Error fetching universities:", error);
    throw error;
  }
}

// Get a university by ID
export const getUniversityById = async (id) => {
  try {
    const university = await University.findByPk(id);
    return university;
  } catch (error) {
    console.error("Error fetching university:", error);
    throw error;
  }
}

// Create a new university
export const createUniversity = async (universityData) => {
  try {
    const newUniversity = await University.create({
      campusName: universityData.campusName,
      shortName: universityData.shortName,
      type: universityData.type,
      websiteUrl: universityData.websiteUrl,
      logoUrl: universityData.logoUrl,
      coverImageUrl: universityData.coverImageUrl,
      province: universityData.province,
      city: universityData.city,
      email: universityData.email,
      phoneNumber: universityData.phoneNumber,
      address: universityData.address,
      description: universityData.description,
      vision: universityData.vision,
      mission: universityData.mission
    });
    console.log("University created successfully:", newUniversity);
    return newUniversity.id;
  } catch (error) {
    console.error("Error creating university:", error);
    throw error;
  }
}

// Update an existing university
export const updateUniversity = async (id, universityData) => {
  try {
    const university = await University.findByPk(id);
    if (!university) {
      throw new Error("University not found");
    }
    const [updated] = await university.update({
      campusName: universityData.campusName,
      shortName: universityData.shortName,
      type: universityData.type,
      websiteUrl: universityData.websiteUrl,
      logoUrl: universityData.logoUrl,
      coverImageUrl: universityData.coverImageUrl,
      province: universityData.province,
      city: universityData.city,
      email: universityData.email,
      phoneNumber: universityData.phoneNumber,
      address: universityData.address,
      description: universityData.description,
      vision: universityData.vision,
      mission: universityData.mission
    }, {
      where: { universityId: id }
    });
    console.log("University updated successfully:", university);
    return updated;
  } catch (error) {
    console.error("Error updating university:", error);
    throw error;
  }
}

// Delete a university
export const deleteUniversity = async (id) => {
  try {
    const university = await University.findByPk(id);
    if (!university) {
      throw new Error("University not found");
    }
    const [deleted] = await university.destroy();
    console.log("University deleted successfully:", university);
    return deleted;
  } catch (error) {
    console.error("Error deleting university:", error);
    throw error;
  }
}



