import { Link } from "react-router-dom";
import { MapPin, Tag, GraduationCap, Calendar, Heart } from "lucide-react";
import formatDate from "../utils/formatDate";

/**
 * ScholarshipCard
 * A reusable card component for displaying a scholarship / fellowship opportunity.
 *
 * Props:
 * - image: string (banner image url)
 * - logo: string (organization logo url)
 * - title: string
 * - subtitle: string
 * - studyIn: string
 * - type: string
 * - degree: string
 * - deadline: string
 * - onViewDetails: function
 */

export default function ScholarshipCard({ image, logo, title, studyIn, type, degree, deadline, scholarshipId, onRemoveFavorite }) {
    const formattedDeadline = formatDate(deadline);

    return (
        <article className="bg-white border w-full border-gray-200 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4">
            {/* Banner image */}
            <div className="relative rounded-xl overflow-hidden aspect-video">
                <img
                src={image}
                alt={title}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-10 p-3.5" >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full shadow-md bg-white/10 shrink-0">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <img 
                                    src={logo}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h2 className="font-semibold text-white text-base leading-snug line-clamp-3 wrap-break-word">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <InfoItem icon={<MapPin className="h-4 w-4 text-[#007EBF]" />} label="Location:" value={studyIn} />
                <InfoItem icon={<Tag className="h-4 w-4 text-[#007EBF]" />} label="Type:" value={type} />
                <InfoItem icon={<GraduationCap className="h-4 w-4 text-[#007EBF]" />} label="Degree:" value={degree} />
                <InfoItem icon={<Calendar className="h-4 w-4 text-[#007EBF]" />} label="Deadline:" value={formattedDeadline} />
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
            <Link to={`/scholarships/${scholarshipId}/full`} className="w-full">
                <button
                    className="w-full rounded-full border border-[#007BFE] cursor-pointer text-[#007BFE] bg-white py-2.5 text-center text-sm font-semibold hover:bg-[#007BFE] hover:text-white transition-colors duration-200"
                >
                    View Details
                </button>
            </Link>
            {onRemoveFavorite && (
                <button
                    type="button"
                    onClick={onRemoveFavorite}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-200 text-red-500 transition hover:bg-red-50"
                    aria-label={`Remove ${title} from saved items`}
                >
                    <Heart className="h-4 w-4 fill-current" />
                </button>
            )}
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
