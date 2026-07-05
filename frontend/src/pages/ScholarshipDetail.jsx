import { Link, useParams } from "react-router-dom";
import ScholarshipDetailCard from "../components/ScholarshipDetail";
import { scholarshipList } from "../manual data/scholarshipData";

export default function ScholarshipDetail() {
  const { scholarshipId } = useParams();
  const scholarship = scholarshipList.find(
    (item) => String(item.scholarshipId) === scholarshipId
  );

  if (!scholarship) {
    return (
      <main className="min-h-screen bg-[#FAFAF9] px-6 py-16 text-gray-900 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-[#D6D3D1] bg-white px-6 py-12 text-center">
          <h1 className="text-2xl font-semibold text-gray-950">Scholarship not found</h1>
          <p className="mt-3 text-sm text-gray-500">
            We could not find the scholarship detail you are looking for.
          </p>
          <Link
            to="/scholarships"
            className="mt-6 inline-flex text-sm font-medium text-[#0EA5C6] underline-offset-2 hover:underline"
          >
            Back to scholarships
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAF9] px-6 py-12 text-gray-900 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center gap-5 text-sm font-medium">
          <Link
            to="/scholarships"
            className="inline-flex text-[#0EA5C6] underline-offset-2 hover:underline"
          >
            Back to scholarships
          </Link>
          {scholarship.applicationLink ? (
            <a
              href={scholarship.applicationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-[#1D4ED8] underline-offset-2 hover:underline"
            >
              Apply
            </a>
          ) : (
            <span className="text-gray-400">Apply</span>
          )}
        </div>

        <ScholarshipDetailCard scholarship={scholarship} />
      </div>
    </main>
  );
}
