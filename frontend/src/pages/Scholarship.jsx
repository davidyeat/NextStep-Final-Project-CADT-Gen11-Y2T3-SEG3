import { useEffect, useState } from "react";
import { BookOpenText, Loader2, Search, X } from "lucide-react";
import ScholarshipCard from "../components/ScholarshipCard";
import FilterCard from "../components/FilterCard";
import { getScholarships } from "../services/scholarshipService";

const initialFilters = {
    type: "",
    location: "",
    major: "",
    minTuition: "",
    maxTuition: "",
};

export default function Scholarship() {
    const [scholarships, setScholarships] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState(initialFilters);
    const [showFilters, setShowFilters] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchScholarships = async () => {
            try {
                setLoading(true);
                const response = await getScholarships();
                setScholarships(response);
                setError("");
            } catch (err) {
                console.error("Failed to load scholarships:", err);
                setError("Unable to load scholarships right now.");
            } finally {
                setLoading(false);
            }
        };

        fetchScholarships();
    }, []);

    const loweredSearch = searchTerm.trim().toLowerCase();

    const filteredScholarships = scholarships.filter((scholarship) => {
        const amount = Number(scholarship.amount);
        const hasMinTuition = filters.minTuition !== "";
        const hasMaxTuition = filters.maxTuition !== "";

        const matchesSearch =
            !loweredSearch ||
            [
                scholarship.title,
                scholarship.studyIn,
                scholarship.degreeLevel,
                scholarship.status,
                scholarship.description,
                scholarship.majorOffered,
            ]
                .filter(Boolean)
                .some((value) => String(value).toLowerCase().includes(loweredSearch));

        const matchesType = !filters.type || scholarship.status === filters.type;
        const matchesLocation =
            !filters.location || scholarship.studyIn === filters.location;
        const matchesMajor =
            !filters.major ||
            String(scholarship.majorOffered || "")
                .toLowerCase()
                .includes(filters.major.toLowerCase());
        const matchesMinTuition =
            !hasMinTuition ||
            (!Number.isNaN(amount) && amount >= Number(filters.minTuition));
        const matchesMaxTuition =
            !hasMaxTuition ||
            (!Number.isNaN(amount) && amount <= Number(filters.maxTuition));

        return (
            matchesSearch &&
            matchesType &&
            matchesLocation &&
            matchesMajor &&
            matchesMinTuition &&
            matchesMaxTuition
        );
    });

    const clearFilters = () => {
        setFilters(initialFilters);
        setSearchTerm("");
    };

    const hasActiveFilters =
        searchTerm ||
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
                                Browse / Scholarships
                            </p>
                            <h1 className="text-4xl font-semibold text-gray-950">
                                Explore Scholarships
                            </h1>
                            <p className="mt-2 text-sm text-gray-500">
                                Find scholarships by location, level, and funding details.
                            </p>
                        </div>

                        <p className="text-sm text-gray-500">
                            Showing{" "}
                            <span className="font-medium text-gray-950">
                                {filteredScholarships.length}
                            </span>{" "}
                            of {scholarships.length} scholarships
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8899AA]" />
                            <input
                                type="text"
                                placeholder="Search scholarships..."
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
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
                            Loading scholarships...
                        </div>
                    </div>
                ) : error ? (
                    <div className="rounded-3xl border border-red-200 bg-red-50 px-6 py-10 text-center text-sm text-red-700">
                        {error}
                    </div>
                ) : filteredScholarships.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-[#D6D3D1] bg-white px-6 py-16 text-center">
                        <BookOpenText className="mx-auto h-10 w-10 text-[#9CA3AF]" />
                        <h2 className="mt-4 text-xl font-semibold text-gray-950">
                            No scholarships found
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
                        {filteredScholarships.map((scholarship) => (
                            <ScholarshipCard
                                key={scholarship.scholarshipId}
                                scholarship={scholarship}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}