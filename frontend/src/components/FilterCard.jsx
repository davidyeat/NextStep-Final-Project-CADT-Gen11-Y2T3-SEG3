import { Filter, X } from "lucide-react";

// ==========================================
// Reusable Sub-Components
// ==========================================

// 1. A consistent wrapper for labels and fields
function FilterField({ label, children }) {
    return (
        <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">
                {label}
            </label>
            {children}
        </div>
    );
}

// 2. Reusable Dropdown Select Component
function FilterSelect({ label, value, onChange, options, placeholder }) {
    return (
        <FilterField label={label}>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
            >
                <option value="">{placeholder}</option>
                {options.map((opt) => (
                    <option key={opt.value || opt} value={opt.value || opt}>
                        {opt.label || opt}
                    </option>
                ))}
            </select>
        </FilterField>
    );
}

// 3. Reusable Input Component (Handles Text and Numbers)
function FilterInput({ label, type = "text", value, onChange, placeholder }) {
    return (
        <FilterField label={label}>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition placeholder:text-gray-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
            />
        </FilterField>
    );
}

// ==========================================
// Main FilterCard Component
// ==========================================
export default function FilterCard({
    showFilters,
    setShowFilters,
    filters,
    setFilters,
    hasActiveFilters,
    clearFilters
}) {
    // Utility helper to update specific filters
    const updateFilter = (key, value) => {
        setFilters((current) => ({ ...current, [key]: value }));
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
            {/* Filter Toggle Button */}
            <button
                onClick={() => setShowFilters((current) => !current)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                    showFilters || hasActiveFilters
                        ? "border-[#007BFE] bg-sky-50 text-[#007BFE]"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
            >
                <span className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                </span>
                {hasActiveFilters && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#007BFE] text-xs font-bold text-white">
                        !
                    </span>
                )}
            </button>

            {/* Filter Content Grid */}
            {showFilters && (
                <div className="mt-4 rounded-2xl border border-gray-200 bg-[#FAFAF9] p-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        
                        <FilterSelect
                            label="Sector"
                            value={filters.type}
                            onChange={(val) => updateFilter("type", val)}
                            placeholder="All sectors"
                            options={["Public", "Private"]}
                        />

                        <FilterSelect
                            label="Location"
                            value={filters.location}
                            onChange={(val) => updateFilter("location", val)}
                            placeholder="All locations"
                            options={["Phnom Penh"]}
                        />

                        <FilterInput
                            label="Major"
                            value={filters.major}
                            onChange={(val) => updateFilter("major", val)}
                            placeholder="Search by major"
                        />

                        <FilterInput
                            label="Min tuition"
                            type="number"
                            value={filters.minTuition}
                            onChange={(val) => updateFilter("minTuition", val)}
                            placeholder="0"
                        />

                        <FilterInput
                            label="Max tuition"
                            type="number"
                            value={filters.maxTuition}
                            onChange={(val) => updateFilter("maxTuition", val)}
                            placeholder="5000"
                        />

                        {/* Reset Button Column */}
                        <div className="flex items-end">
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