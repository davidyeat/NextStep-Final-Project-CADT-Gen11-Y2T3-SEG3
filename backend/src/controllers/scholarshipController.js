import * as scholarshipRepository from "../repositories/scholarshipRepository.js";

// Get /api/scholarships
export async function getAllScholarships(req, res){
  try{
    const scholarships = await scholarshipRepository.getAllScholarships();
    res.status(200).json(scholarships);
  } catch(error){
    console.error("Error fetching scholarships:", error);
    res.status(500).json({message: "Server error"});
  }
};

// Get /api/scholarships/:id
export async function getScholarshipById(req, res){
  try{
    const scholarship = await scholarshipRepository.getScholarshipById(req.params.id);
    if(!scholarship){
      return res.status(404).json({message: "Scholarship not found!"});
    }
    res.status(200).json(scholarship);
  } catch(error){
    console.error("Error fetching scholarship:", error);
    res.status(500).json({message: "Server error"});
  }
};

// POST /api/scholarships
export async function createScholarship(req, res) {
  try{
    const newScholarship = await scholarshipRepository.createScholarship(req.body);
    res.status(201).json({newScholarship});
  } catch(error){
    console.error("Error fetching scholarships:", error);
    res.status(500).json({message: "Server error"});
  }
};

// PUT /api/scholarships/:id
export async function updateScholarship(req, res) {
  try{
    const updatedScholarship = await scholarshipRepository.updateScholarship(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedScholarship);
  } catch(error){
    console.error("Error updating scholarships:", error);
    res.status(500).json({message: "Server error"});
  }
};  

// DELETE /api/scholarships/:id
export async function deleteScholarship(req, res) {
  try{
    await scholarshipRepository.deleteScholarship(req.params.id);
    res.status(204).send();
  } catch(error){
    console.error("Error deleting scholarship:", error);
    res.status(500).json({message: "Server error"});
  }
};