export async function generateRecommendation(req, res) {
  try {
    const {
      scores = {},
      interests = [],
      strengths = [],
      careerField = "",
      careerValues = "",
      workEnvironment = "",
      locationPreference = "",
      additionalPreferences = "",
    } = req.body;

    const averageScore = Object.values(scores).reduce((total, value) => total + Number(value || 0), 0) / Math.max(1, Object.keys(scores).length);
    const interestMatch = interests.length;
    const strengthMatch = strengths.length;

    const majorProfiles = [
      {
        name: "Computer Science",
        compatibilityScore: Math.min(98, 72 + Math.round((averageScore / 100) * 14) + Math.min(interestMatch, 5) + Math.min(strengthMatch, 4)),
        explanation: "A strong match for students who enjoy logic, programming, problem solving, and technology-driven careers.",
        relatedCareers: ["Software Engineer", "Data Analyst", "AI Engineer"],
        jobMarket: {
          demand: "High",
          outlook: "Excellent",
          salaryRange: "$1,000 - $2,500/month",
        },
        requiredSkills: ["Programming", "Analytical thinking", "Problem solving"],
        recommendedUniversities: ["Royal University of Phnom Penh", "Institute of Technology of Cambodia"],
        scholarships: ["National Scholarships", "STEM Merit Grants"],
        aiInsights: "Your profile suggests a strong fit for innovation-heavy roles that reward structured problem solving.",
      },
      {
        name: "Software Engineering",
        compatibilityScore: Math.min(96, 69 + Math.round((averageScore / 100) * 13) + Math.min(interestMatch, 4)),
        explanation: "This pathway is well suited to learners who like building products, working with systems, and turning ideas into practical solutions.",
        relatedCareers: ["Frontend Developer", "Backend Developer", "Product Engineer"],
        jobMarket: {
          demand: "High",
          outlook: "Strong",
          salaryRange: "$1,100 - $2,800/month",
        },
        requiredSkills: ["Coding", "Teamwork", "Project execution"],
        recommendedUniversities: ["CamEd Business School", "Build Bright University"],
        scholarships: ["Digital Skills Scholarships"],
        aiInsights: "Your preferred work style aligns well with applied development and digital product creation.",
      },
      {
        name: "Business Administration",
        compatibilityScore: Math.min(94, 64 + Math.round((averageScore / 100) * 12) + Math.min(interestMatch, 3)),
        explanation: "A strong option for students who enjoy communication, leadership, entrepreneurship, and organized decision making.",
        relatedCareers: ["Operations Manager", "Business Analyst", "Entrepreneur"],
        jobMarket: {
          demand: "Medium",
          outlook: "Stable",
          salaryRange: "$900 - $2,200/month",
        },
        requiredSkills: ["Communication", "Leadership", "Strategy"],
        recommendedUniversities: ["Royal University of Law and Economics", "Norton University"],
        scholarships: ["Entrepreneurship Grants"],
        aiInsights: "Your interests suggest a good balance of people leadership and practical execution.",
      },
      {
        name: "Civil Engineering",
        compatibilityScore: Math.min(93, 61 + Math.round((averageScore / 100) * 15) + Math.min(strengthMatch, 5)),
        explanation: "Best suited for students who value structure, mathematics, problem solving, and creating infrastructure that serves communities.",
        relatedCareers: ["Structural Engineer", "Project Engineer", "Urban Planner"],
        jobMarket: {
          demand: "Medium",
          outlook: "Growing",
          salaryRange: "$1,000 - $2,400/month",
        },
        requiredSkills: ["Mathematics", "Design thinking", "Project coordination"],
        recommendedUniversities: ["Institute of Technology of Cambodia", "Royal University of Phnom Penh"],
        scholarships: ["Engineering Merit Awards"],
        aiInsights: "Your score profile supports a career path rooted in practical impact and long-term planning.",
      },
    ];

    const tailoredRecommendations = majorProfiles
      .map((major) => ({
        ...major,
        compatibilityScore: Math.max(70, major.compatibilityScore + (careerField ? 2 : 0)),
      }))
      .sort((left, right) => right.compatibilityScore - left.compatibilityScore)
      .slice(0, 3);

    return res.status(200).json({
      success: true,
      message: "Recommendation generated successfully",
      data: {
        summary: {
          averageScore,
          interestCount: interestMatch,
          strengthCount: strengthMatch,
          careerField,
          locationPreference,
        },
        recommendations: tailoredRecommendations,
        insights: [
          "Your academic profile indicates a balanced readiness for technology or applied sciences.",
          "Your interests and strengths support career paths that combine analysis with creativity.",
          "We recommend reviewing university programs that offer internships and practical projects.",
        ],
        followUpQuestions: [
          "Would you like to compare these majors with scholarship options?",
          "Would you like to view related universities for each recommendation?",
        ],
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to generate recommendations right now.",
      error: error.message,
    });
  }
}
