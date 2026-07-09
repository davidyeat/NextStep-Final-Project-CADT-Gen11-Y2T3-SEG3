import { Sparkles } from "lucide-react";

export default function RecommendationWelcome({ onStart }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-600">
          <Sparkles className="h-8 w-8" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-slate-900">Welcome to your major recommendation journey</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          This experience analyzes your academic performance, interests, strengths, and career preferences to recommend suitable university majors and future-focused learning paths.
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Start Recommendation
        </button>
      </div>
    </div>
  );
}
