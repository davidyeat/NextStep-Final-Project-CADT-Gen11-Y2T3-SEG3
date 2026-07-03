import scholarships from "./scholarships.json";

export const scholarshipList = scholarships;

export const LEVEL_OPTIONS = ["Undergraduate", "Graduate", "Doctoral"];

export const SUPPORT_OPTIONS = [
  "Full Scholarship (Tuition + Living Costs)",
  "Partial Scholarship (Tuition Only)",
  "Stipend",
  "Research Funding",
];

export const PROVIDER_OPTIONS = [
  "Universities",
  "Government",
  "International",
  "Private",
];

export const initialScholarshipFilters = {
  levelOfStudy: "",
  supportType: "",
  provider: "",
  majorSearch: "",
};

export const normalizeText = (value) => String(value || "").toLowerCase();

export const scholarshipMatchesLevel = (scholarship, selectedLevel) => {
  if (!selectedLevel) {
    return true;
  }

  const degreeLevel = normalizeText(scholarship.degreeLevel);

  if (selectedLevel === "Undergraduate") {
    return ["undergraduate", "bachelor", "ba", "bsc"].some((keyword) =>
      degreeLevel.includes(keyword)
    );
  }

  if (selectedLevel === "Graduate") {
    return ["graduate", "master", "mba", "ma", "msc"].some((keyword) =>
      degreeLevel.includes(keyword)
    );
  }

  if (selectedLevel === "Doctoral") {
    return ["doctoral", "doctorate", "phd"].some((keyword) =>
      degreeLevel.includes(keyword)
    );
  }

  return true;
};

export const scholarshipMatchesSupportType = (scholarship, selectedSupportType) => {
  if (!selectedSupportType) {
    return true;
  }

  const searchable = [
    scholarship.benefits,
    scholarship.description,
    scholarship.applicationProcess,
  ]
    .map(normalizeText)
    .join(" ");

  if (selectedSupportType === "Full Scholarship (Tuition + Living Costs)") {
    return searchable.includes("full") || searchable.includes("living");
  }

  if (selectedSupportType === "Partial Scholarship (Tuition Only)") {
    return searchable.includes("partial") || searchable.includes("tuition only");
  }

  if (selectedSupportType === "Stipend") {
    return searchable.includes("stipend");
  }

  if (selectedSupportType === "Research Funding") {
    return searchable.includes("research") || searchable.includes("funding");
  }

  return true;
};

export const scholarshipMatchesProvider = (scholarship, providerText) => {
  if (!providerText.trim()) {
    return true;
  }

  const providerQuery = providerText.toLowerCase();
  const providerData = [
    scholarship.provider,
    scholarship.providerName,
    scholarship.providerType,
    scholarship.institution,
    scholarship.institutionName,
    scholarship.providerId,
  ]
    .filter((value) => value != null)
    .map((value) => String(value).toLowerCase());

  return providerData.some((value) => value.includes(providerQuery));
};