import ScholarshipCard from "../ScholarshipCard";

export default function RelatedScholarships({ scholarships }) {
    if (!Array.isArray(scholarships) || scholarships.length === 0) {
        return null;
    }

    return (
        <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)] sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                More opportunities
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Related scholarships
            </h2>
            </div>
            <p className="text-sm text-slate-500">
            Explore other options that match this program and funding level.
            </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {scholarships.map((scholarship) => (
            <ScholarshipCard
                key={scholarship.scholarshipId}
                image={scholarship.coverImage || "/default-scholarship.jpg"}
                logo={
                scholarship.Provider?.providerLogo || "/default-provider-logo.png"
                }
                title={scholarship.title}
                studyIn={scholarship.studyIn}
                type={scholarship.FundingType?.name || "N/A"}
                degree={scholarship.degreeLevel}
                deadline={scholarship.applicationDeadline}
                scholarshipId={scholarship.scholarshipId}
            />
            ))}
        </div>
        </section>
    );
}
