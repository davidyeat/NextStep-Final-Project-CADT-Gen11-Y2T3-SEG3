import { useEffect, useState } from "react";
import { Building2, Loader2, Search, X } from "lucide-react";
import FilterCard from "../components/FilterCard";
import UniversityCard from "../components/UniversityCard";
import { getUniversities } from "../services/universityService";

const initialFilters = {
  type: "",
  location: "",
  major: "",
  minTuition: "",
  maxTuition: "",
};

export default function University() {
  const [universities, setUniversities] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        setLoading(true);
        const response = await getUniversities();
        setUniversities(response);
        setError("");
      } catch (err) {
        console.error("Failed to load universities:", err);
        setError("Unable to load universities right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const hasActiveFilters =
    filters.type ||
    filters.location ||
    filters.major ||
    filters.minTuition ||
    filters.maxTuition;

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-gray-900">
      <section className="border-b border-[#E7E5E4] bg-linear-to-br from-white via-slate-50 to-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-medium text-gray-400">
                Browse / Universities
              </p>
              <h1 className="text-4xl font-semibold text-gray-950">
                Explore Universities
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Find institutions by type, location, and keywords.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-950">
                {universities.length}
              </span>{" "}
              universities
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8899AA]" />
              <input
                type="text"
                placeholder="Search universities..."
                className="w-full rounded-xl border border-[#8899AA]/10 bg-white py-3 pl-11 pr-4 text-sm shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] transition-colors placeholder:text-[#8899AA]/50 focus:border-gray-300 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <FilterCard
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              filters={filters}
              setFilters={setFilters}
              hasActiveFilters={hasActiveFilters}
              clearFilters={clearFilters}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {loading ? (
          <div className="flex min-h-[40vh] items-center justify-center rounded-3xl border border-dashed border-[#D6D3D1] bg-white">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading universities...
            </div>
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 px-6 py-10 text-center text-sm text-red-700">
            {error}
          </div>
        ) : universities.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#D6D3D1] bg-white px-6 py-16 text-center">
            <Building2 className="mx-auto h-10 w-10 text-[#9CA3AF]" />
            <h2 className="mt-4 text-xl font-semibold text-gray-950">
              No universities found
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Try clearing filters or using a different search term.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0D1220] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1b2235]"
              >
                <X className="h-4 w-4" />
                Reset filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {universities.map((university) => {
              const location =
                [university.city, university.province]
                  .filter(Boolean)
                  .join(", ") || "Location unavailable";

              return (
                <UniversityCard
                  key={university.universityId}
                  university={university}
                  location={location}
                />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
