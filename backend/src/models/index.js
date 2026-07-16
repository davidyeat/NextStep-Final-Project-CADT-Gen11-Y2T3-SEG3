import { DataTypes } from "sequelize";

import User from "./user.js";
import Role from "./role.js";
import Profile from "./profile.js";
import Provider from "./provider.js";
import University from "./university.js";
import Facility from "./facility.js";
import Admission from "./admission.js";
import AcademicUnit from "./academicUnit.js";
import Major from "./major.js";
import Scholarship from "./scholarship.js";
import FundingType from "./fundingType.js";
import Subject from "./subject.js";
import AssessmentQuestion from "./assessmentQuestion.js";
import AssessmentOption from "./assessmentOption.js";
import RecommendationAssessment from "./recommendationAssessment.js";
import AssessmentAnswer from "./assessmentAnswer.js";
import AssessmentSubjectScore from "./assessmentSubjectScore.js";
import RecommendationRun from "./recommendationRun.js";
import MajorRecommendation from "./majorRecommendation.js";
import UniversityRecommendation from "./universityRecommendation.js";
import ScholarshipRecommendation from "./scholarshipRecommendation.js";

// Users & Roles (One-to-Many)
Role.hasMany(User, {foreignKey: 'roleId'});
User.belongsTo(Role, {foreignKey: 'roleId'});

// Users & Profiles (One-to-One)
User.hasOne(Profile, {foreignKey: 'userId'});
Profile.belongsTo(User, {foreignKey: 'userId'});

// University & Facility (One-to-Many) 
University.hasMany(Facility, {foreignKey: 'universityId'});
Facility.belongsTo(University, {foreignKey: 'universityId'});

// University & Admission (One-to-Many)
University.hasMany(Admission, {foreignKey: 'universityId'});
Admission.belongsTo(University, {foreignKey: 'universityId'});

// University & Department (One-to-Many)
University.hasMany(AcademicUnit, {foreignKey: 'universityId'});
AcademicUnit.belongsTo(University, {foreignKey: 'universityId'});

// Department & Major (One-to-Many)
AcademicUnit.hasMany(Major, {foreignKey: 'academicUnitId'});
Major.belongsTo(AcademicUnit, {foreignKey: 'academicUnitId'});

// FundingType & Scholarship (One-to-Many)
FundingType.hasMany(Scholarship, {foreignKey: 'fundingId'});
Scholarship.belongsTo(FundingType, {foreignKey: 'fundingId'});

// Provider & Scholarship (One-to-Many)
Provider.hasMany(Scholarship, {foreignKey: 'providerId'});
Scholarship.belongsTo(Provider, {foreignKey: 'providerId'});

// Many-to-Many relationships
// Bookmark_University (User <-> University)
User.belongsToMany(University, {through: 'Bookmark_University', foreignKey: 'userId', otherKey: 'universityId'});
University.belongsToMany(User, {through: 'Bookmark_University', foreignKey: 'universityId', otherKey: 'userId'});

// Bookmark_Scholarship (User <-> Scholarship)
User.belongsToMany(Scholarship, {through: 'Bookmark_Scholarship', foreignKey: 'userId', otherKey: 'scholarshipId'});
Scholarship.belongsToMany(User, {through: 'Bookmark_Scholarship', foreignKey: 'scholarshipId', otherKey: 'userId'});

// University_Scholarship (University <-> Scholarship)
University.belongsToMany(Scholarship, {through: 'University_Scholarship', foreignKey: 'universityId', otherKey: 'scholarshipId'});
Scholarship.belongsToMany(University, {through: 'University_Scholarship', foreignKey: 'scholarshipId', otherKey: 'universityId'});

// Scholarship_Major (Scholarship <-> Major)
Scholarship.belongsToMany(Major, {through: 'Scholarship_Major', foreignKey: 'scholarshipId', otherKey: 'majorId'});
Major.belongsToMany(Scholarship, {through: 'Scholarship_Major', foreignKey: 'majorId', otherKey: 'scholarshipId'});

// Recommendation assessment data
User.hasMany(RecommendationAssessment, { foreignKey: "userId", onDelete: "CASCADE" });
RecommendationAssessment.belongsTo(User, { foreignKey: "userId" });

AssessmentQuestion.hasMany(AssessmentOption, { foreignKey: "questionId", onDelete: "CASCADE" });
AssessmentOption.belongsTo(AssessmentQuestion, { foreignKey: "questionId" });

RecommendationAssessment.hasMany(AssessmentAnswer, { foreignKey: "assessmentId", onDelete: "CASCADE" });
AssessmentAnswer.belongsTo(RecommendationAssessment, { foreignKey: "assessmentId" });
AssessmentQuestion.hasMany(AssessmentAnswer, { foreignKey: "questionId", onDelete: "RESTRICT" });
AssessmentAnswer.belongsTo(AssessmentQuestion, { foreignKey: "questionId" });
AssessmentOption.hasMany(AssessmentAnswer, { foreignKey: "optionId", onDelete: "SET NULL" });
AssessmentAnswer.belongsTo(AssessmentOption, { foreignKey: "optionId" });

RecommendationAssessment.hasMany(AssessmentSubjectScore, { foreignKey: "assessmentId", onDelete: "CASCADE" });
AssessmentSubjectScore.belongsTo(RecommendationAssessment, { foreignKey: "assessmentId" });
Subject.hasMany(AssessmentSubjectScore, { foreignKey: "subjectId", onDelete: "RESTRICT" });
AssessmentSubjectScore.belongsTo(Subject, { foreignKey: "subjectId" });

RecommendationAssessment.hasMany(RecommendationRun, { foreignKey: "assessmentId", onDelete: "CASCADE" });
RecommendationRun.belongsTo(RecommendationAssessment, { foreignKey: "assessmentId" });

RecommendationRun.hasMany(MajorRecommendation, { foreignKey: "recommendationRunId", onDelete: "CASCADE" });
MajorRecommendation.belongsTo(RecommendationRun, { foreignKey: "recommendationRunId" });
Major.hasMany(MajorRecommendation, { foreignKey: "majorId", onDelete: "RESTRICT" });
MajorRecommendation.belongsTo(Major, { foreignKey: "majorId" });

RecommendationRun.hasMany(UniversityRecommendation, { foreignKey: "recommendationRunId", onDelete: "CASCADE" });
UniversityRecommendation.belongsTo(RecommendationRun, { foreignKey: "recommendationRunId" });
University.hasMany(UniversityRecommendation, { foreignKey: "universityId", onDelete: "RESTRICT" });
UniversityRecommendation.belongsTo(University, { foreignKey: "universityId" });

RecommendationRun.hasMany(ScholarshipRecommendation, { foreignKey: "recommendationRunId", onDelete: "CASCADE" });
ScholarshipRecommendation.belongsTo(RecommendationRun, { foreignKey: "recommendationRunId" });
Scholarship.hasMany(ScholarshipRecommendation, { foreignKey: "scholarshipId", onDelete: "RESTRICT" });
ScholarshipRecommendation.belongsTo(Scholarship, { foreignKey: "scholarshipId" });

export {
    User, Role, Profile, University,Facility,
    Admission, AcademicUnit, Major,
    Scholarship, FundingType, Provider,
    Subject, AssessmentQuestion, AssessmentOption,
    RecommendationAssessment, AssessmentAnswer, AssessmentSubjectScore,
    RecommendationRun, MajorRecommendation, UniversityRecommendation,
    ScholarshipRecommendation
};
