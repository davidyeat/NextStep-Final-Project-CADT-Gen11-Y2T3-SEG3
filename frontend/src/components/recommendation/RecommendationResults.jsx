import { ArrowRight, BriefcaseBusiness, GraduationCap, BadgeCheck, CheckCircle2, RotateCcw } from "lucide-react";

export default function RecommendationResults({ result, onRestart }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Recommendation complete</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Your tailored major matches</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              These suggestions reflect your profile, interests, strengths, and future goals. Review each option and explore the next step that feels most aligned.
            </p>
          </div>
          <button type="button" onClick={onRestart} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            <RotateCcw className="h-4 w-4" /> Restart assessment
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {result.recommendations?.map((major) => (
          <div key={major.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Recommended major</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">{major.name}</h3>
              </div>
              <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                {major.compatibilityScore}% match
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">{major.explanation}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700"><BriefcaseBusiness className="h-4 w-4 text-sky-600" /> Related careers</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {major.relatedCareers?.map((career) => <li key={career} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" />{career}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700"><GraduationCap className="h-4 w-4 text-sky-600" /> Job market</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li><span className="font-medium text-slate-700">Demand:</span> {major.jobMarket?.demand}</li>
                  <li><span className="font-medium text-slate-700">Outlook:</span> {major.jobMarket?.outlook}</li>
                  <li><span className="font-medium text-slate-700">Salary:</span> {major.jobMarket?.salaryRange}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700"><BadgeCheck className="h-4 w-4 text-sky-600" /> Skills & opportunities</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(major.requiredSkills || []).map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{skill}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700">
                View more details <ArrowRight className="h-4 w-4" />
              </button>
              <button type="button" onClick={onRestart} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">Retake assessment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
