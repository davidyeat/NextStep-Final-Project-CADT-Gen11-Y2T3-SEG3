export default function ScholarshipDetailSection({ icon, title, description }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-4">
        <span className="h-11 w-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-blue-600">
          {icon}
        </span>
        <span className="text-blue-600 text-lg sm:text-xl leading-snug font-semibold">
          {title}
        </span>
      </div>
        {description ? (
          <p className="text-[16px] leading-relaxed text-gray-700">{description}</p>
        ) : null}
    </section>
  );
}
