export default function ScholarshipDetailSection({ icon, title, description }) {
    return (
        <section>
            <div className="flex gap-4 mb-4 sm:flex-row sm:items-center">
                <span className="h-11 w-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-blue-600">
                    {icon}
                </span>
                <span className="font-heading text-[#007BFE] font-bold text-lg sm:text-xl lg:text-2xl leading-snug">
                    {title}
                </span>
            </div>
            {description ? (
                <p className="font-body text-base sm:text-[16px] leading-relaxed text-gray-700">
                    {description}
                </p>
            ) : null}
        </section>
    );
}
