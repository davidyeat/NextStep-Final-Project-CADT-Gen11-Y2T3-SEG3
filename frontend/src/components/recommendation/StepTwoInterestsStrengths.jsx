import { Sparkles } from "lucide-react";

const interestOptions = [
  "Technology", "Engineering", "Healthcare", "Science", "Business", "Education", "Design", "Arts",
  "Communication", "Programming", "Research", "Mathematics", "Helping People", "Entrepreneurship",
  "Sports", "Music", "Reading", "Writing",
];

const strengthOptions = [
  "Problem solving", "Critical thinking", "Creativity", "Communication", "Teamwork", "Leadership",
  "Analytical thinking", "Mathematics", "Programming", "Writing", "Research", "Time management",
];

export default function StepTwoInterestsStrengths({ interests, strengths, onToggleInterest, onToggleStrength }) {
  return (
    <div className="grid gap-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-violet-100 p-3 text-violet-600"><Sparkles className="h-5 w-5" /></div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Interests and strengths</h2>
            <p className="text-sm text-slate-600">Choose the options that best describe what energizes and differentiates you.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((option) => {
                const active = interests.includes(option);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => onToggleInterest(option)}
                    className={`rounded-full px-3 py-2 text-sm transition ${active ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {strengthOptions.map((option) => {
                const active = strengths.includes(option);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => onToggleStrength(option)}
                    className={`rounded-full px-3 py-2 text-sm transition ${active ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
