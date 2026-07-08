import { Brain } from "lucide-react";

const scoreFields = [
  { key: "math", label: "Mathematics" },
  { key: "english", label: "English" },
  { key: "chemistry", label: "Chemistry" },
  { key: "physics", label: "Physics" },
  { key: "biology", label: "Biology" },
  { key: "khmerLiterature", label: "Khmer Literature" },
];

export default function StepOneAcademicForm({ scores, onScoreChange }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-sky-100 p-3 text-sky-600"><Brain className="h-5 w-5" /></div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Academic performance</h2>
            <p className="text-sm text-slate-600">Enter your scores for each subject to create a strong starting profile.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {scoreFields.map(({ key, label }) => (
            <label key={key} className="rounded-2xl border border-slate-200 p-4">
              <div className="mb-2 text-sm font-medium text-slate-700">{label}</div>
              <input
                type="number"
                min="0"
                max="100"
                value={scores[key] ?? ""}
                onChange={(event) => onScoreChange(key, event.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500"
                placeholder="0 - 100"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-sky-600 to-indigo-600 p-6 text-white shadow-sm sm:p-8">
        <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Why this matters</p>
          <h3 className="mt-3 text-2xl font-semibold">A balanced assessment creates better outcomes</h3>
          <p className="mt-3 text-sm leading-7 text-sky-50">
            We use your academic results as one signal among many, helping us recommend majors that align with both your strengths and the future job market.
          </p>
        </div>
      </div>
    </div>
  );
}
