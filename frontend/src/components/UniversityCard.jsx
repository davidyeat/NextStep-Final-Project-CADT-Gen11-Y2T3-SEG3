import { Link } from "react-router-dom";
import { Building2, MapPin, Tag, DollarSign, BookOpen } from "lucide-react";

export default function UniversityCard({ university }) {
    return (
        <article className="overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1">
            <div className="relative h-44 overflow-hidden bg-linear-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
                {/* University Cover Image */}
                {university.coverImageUrl ? (
                <img
                    src={university.coverImageUrl}
                    alt={university.campusName}
                    className="h-full w-full object-cover opacity-80"
                />
                ) : null}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">

                    {/* Logo */}
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
                        {university.logoUrl ? (
                        <img
                            src={university.logoUrl}
                            alt={`${university.campusName} logo`}
                            className="h-full w-full object-cover"
                        />
                        ) : (
                        <Building2 className="h-7 w-7 text-white" />
                        )}
                    </div>

                    {/* University Name */}
                    <div>
                        <p className="font-body text-xs uppercase tracking-[0.2em] text-white/70">
                            University
                        </p>
                        <h2 className="font-heading text-xl font-semibold text-white">
                            {university.shortName || university.campusName}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="space-y-4 p-6">
                <div>
                    <p className="text-lg font-semibold text-gray-950">
                        {university.campusName}
                    </p>
                </div>

                 {/* Info grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    <InfoItem icon={<MapPin className="h-4 w-4 text-[#007EBF]" />} label="Location:" value={university.city || university.province} />
                    <InfoItem icon={<Tag className="h-4 w-4 text-[#007EBF]" />} label="Type:" value={university.type} />
                    <InfoItem icon={<BookOpen className="h-4 w-4 text-[#007EBF]" />} label="Faculties" value={200} />
                    <InfoItem icon={<DollarSign className="h-4 w-4 text-[#007EBF]" />} label="Tuition Fee (Year)" value={2} />
                </div>

                <div className="flex items-center gap-3 pt-2">
                    <Link
                        to={`/universities/${university.universityId}/full`}
                        className="w-full rounded-full border border-[#007BFE] cursor-pointer text-[#007BFE] bg-white py-2.5 text-center text-sm font-semibold hover:bg-[#007BFE] hover:text-white transition-colors duration-200"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
}

function InfoItem({ icon, label, value }) {
    return (
        <div className="flex flex-col gap-1 min-w-0 items-start text-left">
            <div className="flex items-center gap-1.5 min-w-0">
                <span className="shrink-0">{icon}</span>
                <p className="text-sm text-gray-500">{label}</p>
            </div>
            <p className="text-sm text-gray-900 pl-5.5 font-semibold whitespace-normal wrap-break-word leading-snug">{value}</p>
        </div>
    );
}