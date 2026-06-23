import * as universityRepository from "../repositories/universityRepository.js";

// Get /api/universities
export const getAllUniversities = async(req, res) => {
  try{
    const universities = await universityRepository.getAllUniversities();
    res.status(200).json(universities);
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({message: "Server error"});
  }
}

// Get /api/universities/:id
export const getUniversityById = async(req, res) => {
  try{
    const university = await universityRepository.getUniversityById(req.params.id);
    if(!university) {
      return res.status(404).json({message: "University not found!"});
    }
    res.status(200).json(university);
  }catch(error){
    console.log("Error fetching university by id: ", error);
    res.status(500).json({message: "Server Error"});
  }
}

// POST /api/universities
export const createUniversity = async(req, res) => {
  try{
    const newUniversity = await universityRepository.createUniversity(req.body);
    res.status(201).json(newUniversity);
  } catch(error){
    console.log("Error adding university: ", error);
    res.status(500).json({message: "Server error"});
  }
}

// PUT /api/universities/:id
export const updateUniversity = async(req, res) => {
  try{
    const updatedUniversity = await universityRepository.updateUniversity(req.params.id, req.body);
    res.status(200).json(updatedUniversity);
  } catch(error){
    console.error("Error updating university:", error);
    res.status(500).json({message: "Server error"});
  }
}

// DELETE /api/universities/:id
export const deleteUniversity = async(req, res) => {
  try{
    await universityRepository.deleteUniversity(req.params.id);
    res.status(204).send();
  } catch(error){
    console.error("Error deleting university:", error);
    res.status(500).json({message: "Server error"});
  }
}