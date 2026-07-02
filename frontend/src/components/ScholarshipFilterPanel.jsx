import { Filter, X } from "lucide-react";

const LEVEL_OPTIONS = ["Undergraduate", "Graduate", "Doctoral"];

const SUPPORT_OPTIONS = [
  "Full Scholarship (Tuition + Living Costs)",
  "Partial Scholarship (Tuition Only)",
  "Stipend",
  "Research Funding",
];

const PROVIDER_OPTIONS = [
  "Universities",
  "Government Programs",
  "NGOs",
  "Private Organizations",
  "Fulbright Program",
  "Chevening",
  "DAAD",
  "Erasmus+",
  "Asian Development Bank",
  "UNESCO",
];

const MAJOR_OPTIONS = [
  "Computer Science",
  "Engineering",
  "Medicine",
  "Business",
  "Social Sciences",
  "Information Technology",
  "Arts",
  "Law",
  "Education",
  "Science",
  "Other",
];

export default function ScholarshipFilterPanel({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
  hasActiveFilters,
  clearFilters,
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        type="button"
        onClick={() => setShowFilters((current) => !current)}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
          showFilters || hasActiveFilters
            ? "border-sky-200 bg-sky-50 text-sky-700"
            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
        }`}
      >
        <span className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Scholarship Filters
        </span>
        {hasActiveFilters && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
            !
          </span>
        )}
      </button>

      {showFilters && (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-[#FAFAF9] p-5">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Level of Study
              </label>
              <select
                value={filters.levelOfStudy}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    levelOfStudy: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All levels</option>
                {LEVEL_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Type of Support
              </label>
              <select
                value={filters.supportType}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    supportType: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All support types</option>
                {SUPPORT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Provider / Institution
              </label>
              <select
                value={filters.provider}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    provider: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition placeholder:text-gray-400 focus:border-sky-300 focus:outline-none"
              >
                <option value="">All providers</option>
                {PROVIDER_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Major
              </label>
              <select
                value={filters.majorSearch}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    majorSearch: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All majors</option>
                {MAJOR_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2">
              <button
                type="button"
                onClick={clearFilters}
                disabled={!hasActiveFilters}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-500 transition hover:border-gray-300 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <X className="h-3.5 w-3.5" />
                Clear all filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}