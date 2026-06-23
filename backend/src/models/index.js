import { DataTypes } from "sequelize";

import User from "./user.js";
import Role from "./role.js";
import Profile from "./profile.js";
import Provider from "./provider.js";
import University from "./university.js";
import Facility from "./facility.js";
import Admission from "./admission.js";
import Department from "./department.js";
import Major from "./major.js";
import MajorCategory from "./majorCategory.js";
import Scholarship from "./scholarship.js";
import FundingType from "./fundingType.js";

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
University.hasMany(Department, {foreignKey: 'universityId'});
Department.belongsTo(University, {foreignKey: 'universityId'});

// Department & Major (One-to-Many)
Department.hasMany(Major, {foreignKey: 'departmentId'});
Major.belongsTo(Department, {foreignKey: 'departmentId'});

// Major & MajorCategory (One-to-Many)
MajorCategory.hasMany(Major, {foreignKey: 'categoryId'});
Major.belongsTo(MajorCategory, {foreignKey: 'categoryId'});

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

export {
    User, Role, Profile, University,Facility,
    Admission, Department, Major, MajorCategory, 
    Scholarship, FundingType, Provider
};
