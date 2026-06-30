import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, GraduationCap, Sparkles } from "lucide-react";

export default function Hero() {
    const highlights = [
        {
            label: "Explore universities",
            description: "Compare institutions in one place.",
            icon: GraduationCap,
        },
        {
            label: "Find scholarships",
            description: "Discover opportunities that fit your profile.",
            icon: Sparkles,
        },
        {
            label: "Choose majors",
            description: "Review programs and academic paths with clarity.",
            icon: BookOpenCheck,
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

            <div className="relative mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="text-center lg:text-left">
                        <p className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-sky-500" />
                            Education Discovery Platform
                        </p>

                        <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                            Your journey to higher education starts here.
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                            Discover universities, academic majors, and scholarship opportunities in one place. NextStep helps
                            Cambodian students search faster, compare smarter, and get personalized recommendations.
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                            <Link
                                to="/universities"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-700"
                            >
                                Explore Universities
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/scholarships"
                                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50"
                            >
                                Find Scholarships
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-4 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-xl shadow-sky-100/50 backdrop-blur-sm">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
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