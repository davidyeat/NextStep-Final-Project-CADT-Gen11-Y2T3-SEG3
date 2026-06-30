import { Link } from "react-router-dom";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export default function UniversityCard({ university }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E7E5E4] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1">
        <div className="relative h-44 overflow-hidden bg-linear-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
            {university.coverImageUrl ? (
            <img
                src={university.coverImageUrl}
                alt={university.campusName}
                className="h-full w-full object-cover opacity-80"
            />
            ) : null}
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1020]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3">
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
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                        University
                    </p>
                    <h2 className="text-xl font-semibold text-white">
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

            <div className="flex flex-wrap gap-2 text-xs font-medium">
                {university.type && (
                    <span className="rounded-full bg-[#00D4FF]/10 px-3 py-1 text-[#0EA5C6]">
                        {university.type}
                    </span>
                )}
                <span className="rounded-full bg-[#F5F5F4] px-3 py-1 text-gray-600">
                    {university.state}
                </span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
                {university.city && (
                    <div className="flex gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
                        <span>{university.city}</span>
                    </div>
                )}
                {university.email && (
                    <div className="flex gap-2">
                        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
                        <span>{university.email}</span>
                    </div>
                )}
                {university.phoneNumber && (
                    <div className="flex gap-2">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
                        <span>{university.phoneNumber}</span>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 pt-2">
                <Link
                    to={`/university-details/${university.id}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0D1220] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1b2235]"
                >
                    View Details
                </Link>
            </div>
        </div>
    </article>
  );
}
