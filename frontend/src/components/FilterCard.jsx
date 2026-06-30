import { Filter, X } from "lucide-react";

export default function FilterCard({showFilters, setShowFilters, filters, setFilters, hasActiveFilters, clearFilters}) {
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
          Filters
        </span>
        {hasActiveFilters && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
            !
          </span>
        )}
      </button>

      {showFilters && (
        <div
          id="university-filters"
          className="mt-4 rounded-2xl border border-gray-200 bg-[#FAFAF9] p-5"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Sector
              </label>
              <select
                value={filters.type}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    type: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All sectors</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    location: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All locations</option>
                <option value="Phnom Penh">Phnom Penh</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Major
              </label>
              <input
                type="text"
                value={filters.major}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    major: event.target.value,
                  }))
                }
                placeholder="Search by major"
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition placeholder:text-gray-400 focus:border-sky-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Min tuition
              </label>
              <input
                type="number"
                value={filters.minTuition}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    minTuition: event.target.value,
                  }))
                }
                placeholder="0"
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition placeholder:text-gray-400 focus:border-sky-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Max tuition
              </label>
              <input
                type="number"
                value={filters.maxTuition}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    maxTuition: event.target.value,
                  }))
                }
                placeholder="5000"
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition placeholder:text-gray-400 focus:border-sky-300 focus:outline-none"
              />
            </div>

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
