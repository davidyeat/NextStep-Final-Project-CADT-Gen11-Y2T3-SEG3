export default function LoadingSkeleton() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)] text-slate-900">
      <div className="relative h-90 w-full overflow-hidden bg-slate-200 lg:h-105">
        <div className="absolute inset-0 animate-pulse bg-slate-300" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-24 animate-pulse rounded-2xl border border-slate-200 bg-white"
                />
              ))}
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)] sm:p-8">
              <div className="h-6 w-40 animate-pulse rounded-full bg-slate-200" />
              <div className="mt-4 space-y-3">
                <div className="h-4 w-full animate-pulse rounded-full bg-slate-200" />
                <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-200" />
                <div className="h-4 w-4/6 animate-pulse rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-28 animate-pulse rounded-2xl border border-slate-200 bg-white"
                />
              ))}
            </div>
          </div>

          <div className="h-96 animate-pulse rounded-4xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)]" />
        </div>
      </div>
    </main>
  );
}
