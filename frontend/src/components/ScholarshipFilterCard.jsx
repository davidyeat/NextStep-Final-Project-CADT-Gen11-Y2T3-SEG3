import { Filter, X } from "lucide-react";

export default function ScholarshipFilterCard({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
  hasActiveFilters,
  clearFilters,
  options,
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
          Filters
        </span>
        {hasActiveFilters && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
            !
          </span>
        )}
      </button>

      {showFilters && (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-[#FAFAF9] p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Study in
              </label>
              <select
                value={filters.studyIn}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    studyIn: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All locations</option>
                {options.studyIn.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Degree level
              </label>
              <select
                value={filters.degreeLevel}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    degreeLevel: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All levels</option>
                {options.degreeLevel.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    status: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All statuses</option>
                {options.status.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Currency
              </label>
              <select
                value={filters.currency}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    currency: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition focus:border-sky-300 focus:outline-none"
              >
                <option value="">All currencies</option>
                {options.currency.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Min amount
              </label>
              <input
                type="number"
                value={filters.minAmount}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    minAmount: event.target.value,
                  }))
                }
                placeholder="0"
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition placeholder:text-gray-400 focus:border-sky-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">
                Max amount
              </label>
              <input
                type="number"
                value={filters.maxAmount}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    maxAmount: event.target.value,
                  }))
                }
                placeholder="100000"
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 shadow-sm transition placeholder:text-gray-400 focus:border-sky-300 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
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
