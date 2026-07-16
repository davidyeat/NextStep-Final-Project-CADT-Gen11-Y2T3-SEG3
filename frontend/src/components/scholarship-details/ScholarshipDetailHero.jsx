import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Award, ExternalLink } from "lucide-react";

export default function ScholarshipDetailHero({ scholarships, isFavorite, onToggleFavorite }) {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative h-112 w-full lg:h-130 bg-linear-to-br from-[#0F172A] via-[#111827] to-[#1F2937]">
                {scholarships.coverImage ? (
                <img
                    src={scholarships.coverImage}
                    alt={scholarships.title}
                    className="h-full w-full object-cover opacity-70"
                />
                ) : null}
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1020]/95 via-[#0B1020]/60 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <Link
                        to="/scholarships"
                        className="mb-4 inline-flex items-center gap-1.5 text-sm text-[#B7C0CA] transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Scholarships
                    </Link>

                    <div className="mb-6 flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-10">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="text-xs font-semibold tracking-wide px-2.5 py-1 rounded bg-[#007BFE]/15 text-[#007BFE]"
                                >
                                    {scholarships.FundingType?.name}
                                </span>
                                <span
                                    className={`text-xs font-semibold tracking-wide px-2.5 py-1 rounded ${
                                        scholarships.status === 'Open'
                                        ? 'bg-green-500/15 text-green-400 font-semibold tracking-wide' : scholarships.status === 'Closing Soon'
                                        ? 'bg-yellow-500/15 text-yellow-400 font-semibold tracking-wide' : 'bg-red-500/15 text-red-400 font-semibold tracking-wide'
                                    }`}
                                >
                                    {scholarships.status}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-15 h-15 rounded-full shadow-md bg-white/10 shrink-0">
                                    <div className="relative w-full h-full overflow-hidden">
                                        <img 
                                            src={scholarships.Provider?.providerLogo}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h1 className="text-3xl font-semibold text-[#F0F4F8] lg:text-4xl">
                                    {scholarships.title}
                                </h1>
                            </div>
                            <p className="text-[#8899AA] mt-2 flex items-center gap-2">
                                <Award className="w-4 h-4 text-[#007BFE]" /> {scholarships.Provider?.providerName}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={onToggleFavorite}
                                aria-label={isFavorite ? "Remove from saved items" : "Save scholarship"}
                                aria-pressed={isFavorite}
                                className="w-10 h-10 rounded-full cursor-pointer bg-white/80 text-gray-600 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"
                            >
                                <Heart
                                    className={`w-5 h-5 ${isFavorite ? "fill-[#007BFE] text-[#007BFE]" : ""}`}
                                />
                            </button>
                            <a
                                href={scholarships.applicationLink}
                                target="_blank"
                                className="flex items-center gap-2 bg-[#007BFE] text-[#F0F4F8] px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(255,184,48,0.3)] transition-shadow"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
