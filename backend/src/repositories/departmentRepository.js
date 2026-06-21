import sequelize from "../config/database";
import Department from "../models/department.js";

// Get all departments
export const getAllDepartments = async() => {
  try{
    const departments = await Department.findAll();
    return departments;
  } catch(error){
    console.error("Error fetching departments:", error);
    throw error;
  }
}

// Get a department by ID
export const getDepartmentById = async(id) => {
  try{
    const department = await Department.findByPk(id);
    return department;
  } catch(error){
    console.error("Error fetching department:", error);
    throw error;
  }
}

// Create a new Department
export const createDepartment = async(departmentData) => {
  try{
    const department = await Department.create({
      name: departmentData.name,
      description: departmentData.description
    });
    return department;
  } catch(error){
    console.error("Error creating department:", error);
    throw error;
  }
}