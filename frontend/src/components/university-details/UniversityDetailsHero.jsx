import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";

export default function UniversityDetailsHero({ university }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-112 w-full bg-linear-to-br from-[#0F172A] via-[#111827] to-[#1F2937]">
        {university.coverImageUrl ? (
          <img
            src={university.coverImageUrl}
            alt={university.campusName}
            className="h-full w-full object-cover opacity-70"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B1020]/95 via-[#0B1020]/60 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/universities"
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-[#B7C0CA] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Universities
          </Link>

          <div className="mb-5 flex items-start justify-between gap-6">
            <div>
              <span className="mb-3 inline-flex rounded-full bg-[#00D4FF]/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#00D4FF]">
                {university.type}
              </span>
              <h1 className="font-['Space_Grotesk'] text-3xl font-semibold text-[#F0F4F8] lg:text-4xl">
                {university.campusName}
              </h1>
              <p className="mt-1 text-sm text-[#B7C0CA]">
                {university.shortName}
              </p>
            </div>

            <button
              className="shrink-0 rounded-full bg-white/85 p-3 text-gray-600 shadow-lg shadow-black/20 backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}