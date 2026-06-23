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
    const university = await University.findOne({where: {universityId: id}});
    return university;
  } catch (error) {
    console.error("Error fetching university:", error);
    throw error;
  }
}

// Create a new university
export const createUniversity = async (data) => {
  try {
    const newUniversity = await University.create({
      campusName: data.campusName,
      shortName: data.shortName,
      type: data.type,
      websiteUrl: data.websiteUrl,
      logoUrl: data.logoUrl,
      coverImageUrl: data.coverImageUrl,
      province: data.province,
      city: data.city,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      description: data.description,
      vision: data.vision,
      mission: data.mission
    });
    console.log("University created successfully:", newUniversity.id);
    return newUniversity;
  } catch (error) {
    console.error("Error creating university:", error);
    throw error;
  }
}

// Update an existing university
export const updateUniversity = async(id, data) => {
  try {
    const university = await University.findOne({where: {universityId: id}});
    if (!university) {
      throw new Error("University not found");
    }
    const updated = await university.update({
      campusName: data.campusName,
      shortName: data.shortName,
      type: data.type,
      websiteUrl: data.websiteUrl,
      logoUrl: data.logoUrl,
      coverImageUrl: data.coverImageUrl,
      province: data.province,
      city: data.city,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      description: data.description,
      vision: data.vision,
      mission: data.mission
    });

    console.log("University updated successfully:", university.id);
    return updated;
  } catch (error) {
    console.error("Error updating university:", error);
    throw error;
  }
}

// Delete a university
export const deleteUniversity = async (id) => {
  try {
    const university = await University.findOne({where: {universityId: id}});
    if (!university) {
      throw new Error("University not found");
    }
    await university.destroy();
    console.log("University deleted successfully:", id);
    return true;
  } catch (error) {
    console.error("Error deleting university:", error);
    throw error;
  }
}



