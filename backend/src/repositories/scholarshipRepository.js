import sequelize from "../config/database.js";
import Scholarship from "../models/scholarship.js";

// Get all scholarships
export const getAllScholarships = async() => {
    try{
        const scholarships = await Scholarship.findAll();
        return scholarships;
    } catch (error) {
        console.log("Error fetching scholarships: ", error);
        throw new Error("Error fetching scholarships");
    }
};

// Get a scholarship by ID
export const getScholarshipById = async(id) => {
    try{
        const scholarship = await Scholarship.findOne({where: {scholarshipId: id}});
        return scholarship;
    } catch (error) {
        console.log("Error fetching scholarship: ", error);
        throw new Error("Error fetching scholarship");
    }
};

// Create a new Scholarship
export const createScholarship = async(data) => {
    try{
        const newScholarship = await Scholarship.create({
            fundingId: data.fundingId,
            providerId: data.providerId,
            title: data.title,
            studyIn: data.studyIn,
            description: data.description,
            degreeLevel: data.degreeLevel,
            amount: data.amount,
            currency: data.currency,
            availableSlots: data.availableSlots,
            benefits: data.benefits,
            majorOffered: data.majorOffered,
            applicationDeadline: data.applicationDeadline,
            applicationProcess: data.applicationProcess,
            applicationLink: data.applicationLink,
            documentRequirements: data.documentRequirements,
            eligibilityCriteria: data.eligibilityCriteria,
            status: data.status
        });

        console.log("Scholarship created successfully:", newScholarship.scholarshipId);
        return newScholarship;
    } catch (error) {
        console.log("Error creating scholarship: ", error);
        throw error;
    }
};

// Update a scholarship
export const updateScholarship = async(id, data) => {
    try{
        const scholarship = await Scholarship.findOne({where: {scholarshipId: id}});
        if(!scholarship) {
            throw new Error("Scholarship not found");
        }
        
        const updated = await scholarship.update({
            fundingId: data.fundingId,
            providerId: data.providerId,
            title: data.title,
            studyIn: data.studyIn,
            description: data.description,
            degreeLevel: data.degreeLevel,
            amount: data.amount,
            currency: data.currency,
            availableSlots: data.availableSlots,
            benefits: data.benefits,
            majorOffered: data.majorOffered,
            applicationDeadline: data.applicationDeadline,
            applicationProcess: data.applicationProcess,
            applicationLink: data.applicationLink,
            documentRequirements: data.documentRequirements,
            eligibilityCriteria: data.eligibilityCriteria,
            status: data.status
        });

        console.log("Scholarship updated successfully:", scholarship.scholarshipId);
        return updated;
    } catch (error) {
        console.log("Error updating scholarship: ", error);
        throw new Error("Error updating scholarship");
    }
};

// Delete a scholarship
export const deleteScholarship = async(id) => {
    try{
        const scholarship = await Scholarship.findOne({where: {scholarshipId: id}});
        if(!scholarship) {
            throw new Error("Scholarship not found");
        }
        await scholarship.destroy();
        return true;
    } catch (error) {
        console.error("Error deleting scholarship: ", error);
        throw error;
    }
};