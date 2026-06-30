import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, GraduationCap, Sparkles } from "lucide-react";

export default function AboutHero() {
  const highlights = [
    {
      label: "Centralized platform",
      value: "One place for universities, majors, and scholarships",
      icon: BookOpenCheck,
    },
    {
      label: "Student-first guidance",
      value: "Recommendations based on interests and academic profile",
      icon: Sparkles,
    },
    {
      label: "Better decisions",
      value: "Faster discovery with search and filtering tools",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-linear-to-br from-white via-slate-50 to-sky-50">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, rgba(14, 165, 233, 0.16), transparent 28%), radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.12), transparent 30%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              About NextStep
            </p>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Helping Cambodian students discover the right educational path.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              NextStep is a web-based educational discovery platform built to
              help students explore universities, academic majors, and
              scholarship opportunities in one place. It centralizes scattered
              information and adds personalized recommendations so students can
              make smarter decisions faster.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/universities"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-700"
              >
                Explore universities
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/scholarships"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                Find scholarships
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-xl shadow-sky-100/50 backdrop-blur-sm">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
