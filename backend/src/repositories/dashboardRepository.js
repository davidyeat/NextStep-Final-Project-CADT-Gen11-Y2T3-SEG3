import University from "../models/university.js";
import Scholarship from "../models/scholarship.js";
import Major from "../models/major.js";
import User from "../models/user.js";

export const countDashboardEntities = async () => {
    const [
        universitiesCount, 
        scholarshipsCount, 
        majorsCount,
        usersCount
    ] = await Promise.all([
        University.count(),
        Scholarship.count(),
        Major.count(),
        User.count()
    ]);

    return {
        universities: universitiesCount,
        scholarships: scholarshipsCount,
        majors: majorsCount,
        users: usersCount,
    };
}
