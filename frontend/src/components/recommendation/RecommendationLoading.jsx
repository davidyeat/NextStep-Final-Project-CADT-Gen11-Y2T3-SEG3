import { Sparkles } from "lucide-react";

export default function RecommendationLoading({ loadingMessages }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-600">
        <Sparkles className="h-8 w-8 animate-pulse" />
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-slate-900">Generating your recommendations</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">Our backend is evaluating your profile and preparing tailored major suggestions.</p>
      <div className="mt-6 space-y-3">
        {loadingMessages.map((message, index) => (
          <div key={message} className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <div className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-sky-600" : "bg-slate-300"}`} />
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}
