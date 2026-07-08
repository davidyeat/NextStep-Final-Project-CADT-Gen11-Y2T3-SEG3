export default function RecommendationHeader({ step, progressPercentage }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">University Major Recommendation</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">Find the major that fits your future</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            This assessment combines your academic profile, interests, strengths, and career goals to recommend university majors that match your potential.
          </p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm text-sky-700">
          <div className="font-semibold">Step {step} of 3</div>
          <div className="mt-2 h-2 w-48 overflow-hidden rounded-full bg-sky-100">
            <div className="h-full rounded-full bg-sky-600 transition-all" style={{ width: `${progressPercentage}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
