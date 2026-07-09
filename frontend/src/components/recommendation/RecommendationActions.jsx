import { ArrowLeft, ArrowRight } from "lucide-react";

export default function RecommendationActions({ step, onBack, onContinue, onSubmit, isSubmitting }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
        <ArrowLeft className="h-4 w-4" /> {step === 0 ? "Back home" : step === 1 ? "Back" : "Previous"}
      </button>

      <div className="flex gap-3">
        {step === 0 && (
          <button type="button" onClick={onContinue} className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700">
            Start recommendation <ArrowRight className="h-4 w-4" />
          </button>
        )}

        {step > 0 && step < 3 && (
          <button type="button" onClick={onContinue} className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        )}

        {step === 3 && (
          <button type="button" onClick={onSubmit} className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700">
            {isSubmitting ? "Submitting..." : "View recommendations"}
          </button>
        )}
      </div>
    </div>
  );
}
