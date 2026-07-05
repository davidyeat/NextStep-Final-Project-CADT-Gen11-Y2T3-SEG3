import { CalendarDays, CircleDollarSign, GraduationCap, MapPin, Tag } from "lucide-react";

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

export default function ScholarshipDetail({ scholarship }) {
  return (
    <article className="rounded-3xl border border-[#E7E5E4] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Scholarship detail</p>
      <h1 className="mt-3 text-3xl font-semibold text-gray-950">{scholarship.title || "Untitled scholarship"}</h1>

      <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
        {scholarship.degreeLevel && (
          <span className="rounded-full bg-[#00D4FF]/10 px-3 py-1 text-[#0EA5C6]">{scholarship.degreeLevel}</span>
        )}
        {scholarship.status && (
          <span className="rounded-full bg-[#F5F5F4] px-3 py-1 text-gray-600">{scholarship.status}</span>
        )}
      </div>

      <div className="mt-6 grid gap-3 text-sm text-gray-600 md:grid-cols-2">
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
      </div>

      {scholarship.majorOffered && (
        <div className="mt-5 flex gap-2 text-sm text-gray-600">
          <Tag className="mt-0.5 h-4 w-4 shrink-0 text-[#8899AA]" />
          <p>{scholarship.majorOffered}</p>
        </div>
      )}

      {scholarship.description && (
        <p className="mt-6 text-sm leading-relaxed text-gray-700">{scholarship.description}</p>
      )}

      {scholarship.benefits && (
        <section className="mt-6 rounded-2xl bg-slate-50 p-4">
          <h2 className="text-sm font-semibold text-gray-900">Benefits</h2>
          <p className="mt-2 text-sm text-gray-700">{scholarship.benefits}</p>
        </section>
      )}

      {scholarship.applicationProcess && (
        <section className="mt-4 rounded-2xl bg-slate-50 p-4">
          <h2 className="text-sm font-semibold text-gray-900">Application process</h2>
          <p className="mt-2 text-sm text-gray-700">{scholarship.applicationProcess}</p>
        </section>
      )}
    </article>
  );
}
