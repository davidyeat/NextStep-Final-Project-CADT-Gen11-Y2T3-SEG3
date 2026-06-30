import { Link } from "react-router-dom";

export default function AuthPageShell({
  eyebrow,
  title,
  description,
  features = [],
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-linear-to-br from-white via-slate-50 to-sky-50 p-8 shadow-xl shadow-sky-100/40 lg:p-12">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at top right, rgba(14, 165, 233, 0.16), transparent 28%), radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 30%)",
            }}
          />

          <div className="relative">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                {eyebrow}
              </p>
            )}

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              {description}
            </p>

            {features.length > 0 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                    >
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: feature.bg, color: feature.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {feature.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          {children}

          {footerText && footerLinkText && footerLinkTo && (
            <p className="mt-6 text-center text-sm text-gray-500">
              {footerText}{" "}
              <Link
                to={footerLinkTo}
                className="font-semibold text-sky-700 transition-colors hover:text-sky-800"
              >
                {footerLinkText}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
