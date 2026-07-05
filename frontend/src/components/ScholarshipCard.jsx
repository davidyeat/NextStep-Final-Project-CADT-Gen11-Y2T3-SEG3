import { CalendarDays, CircleDollarSign, ExternalLink, GraduationCap, MapPin, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const formatAmount = (amount, currency) => {
  if (amount == null || amount === "") {
    return "Amount not specified";
  }

  const numericAmount = Number(amount);
  if (Number.isNaN(numericAmount)) {
    return `${amount} ${currency || ""}`.trim();
  }

  return `${new Intl.NumberFormat("en-US").format(numericAmount)} ${currency || ""}`.trim();
};

const formatDate = (dateString) => {
  if (!dateString) {
    return "No deadline listed";
  }

  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) {
    return dateString;
  }

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function ScholarshipCard({ scholarship }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E7E5E4] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative bg-linear-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff] px-6 pb-7 pt-6">
        {/* <p className="text-xs uppercase tracking-[0.2em] text-black">Scholarship</p> */}
        <h2 className="mt-3 line-clamp-2 text-2xl font-semibold text-black">
          {scholarship.title || "Untitled scholarship"}
        </h2>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          {scholarship.degreeLevel && (
            <span className="rounded-full bg-[#00D4FF]/10 px-3 py-1 text-[#0EA5C6]">
              {scholarship.degreeLevel}
            </span>
          )}
          {scholarship.status && (
            <span className="rounded-full bg-[#F5F5F4] px-3 py-1 text-gray-600">
              {scholarship.status}
            </span>
          )}
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          {scholarship.studyIn && (
            <div className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
              <span>{scholarship.studyIn}</span>
            </div>
          )}

          <div className="flex gap-2">
            <CircleDollarSign className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
            <span>{formatAmount(scholarship.amount, scholarship.currency)}</span>
          </div>

          <div className="flex gap-2">
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
            <span>{formatDate(scholarship.applicationDeadline)}</span>
          </div>

          {scholarship.availableSlots != null && (
            <div className="flex gap-2">
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
              <span>{scholarship.availableSlots} available slots</span>
            </div>
          )}

          {scholarship.majorOffered && (
            <div className="flex gap-2">
              <Tag className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
              <span className="line-clamp-2">{scholarship.majorOffered}</span>
            </div>
          )}
        </div>

        {scholarship.description && (
          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
            {scholarship.description}
          </p>
        )}

        <div className="flex items-center gap-4 pt-1 text-sm font-medium">
          <Link
            to={`/scholarships/${scholarship.scholarshipId}`}
            className="text-[#0EA5C6] underline-offset-2 transition-colors hover:text-[#0284C7] hover:underline"
          >
            Detail
          </Link>

          {scholarship.applicationLink ? (
            <a
              href={scholarship.applicationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#1D4ED8] underline-offset-2 transition-colors hover:text-[#1E3A8A] hover:underline"
            >
              Apply
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="text-gray-400">Apply</span>
          )}
        </div>
      </div>
    </article>
  );
}
