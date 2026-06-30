import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Building2, Compass, Filter, GraduationCap, Lightbulb, Search, Shield, Sparkles, Target } from "lucide-react";
import AboutHero from "../components/about/AboutHero";
import AboutCard from "../components/about/AboutCard";
import AboutSectionHeader from "../components/about/AboutSectionHeader";

export default function About() {
  const missionCards = [
    {
      icon: Compass,
      title: "Purpose",
      description:
        "NextStep helps Cambodian students explore educational opportunities through one centralized, easy-to-use platform.",
      color: "#0F766E",
      bg: "#ECFDF5",
    },
    {
      icon: Shield,
      title: "Problem",
      description:
        "University and scholarship information is scattered across multiple sources, making the search process slow and frustrating.",
      color: "#1D4ED8",
      bg: "#EFF6FF",
    },
    {
      icon: Target,
      title: "Main goal",
      description:
        "Provide smart recommendations and practical filtering tools so students can make better decisions about where to study.",
      color: "#B45309",
      bg: "#FFFBEB",
    },
  ];

  const platformCards = [
    {
      icon: Building2,
      title: "Explore universities",
      description:
        "Browse institutions by location, type, and other key details to find a better fit faster.",
      color: "#1D4ED8",
      bg: "#EFF6FF",
    },
    {
      icon: BookOpen,
      title: "Discover majors",
      description:
        "Review academic majors and programs to understand what each university can offer.",
      color: "#7C3AED",
      bg: "#F5F3FF",
    },
    {
      icon: GraduationCap,
      title: "Find scholarships",
      description:
        "Search for scholarship opportunities that support access to higher education.",
      color: "#0F766E",
      bg: "#ECFDF5",
    },
    {
      icon: Sparkles,
      title: "Get recommendations",
      description:
        "Receive personalized suggestions based on your interests, skills, and academic background.",
      color: "#B45309",
      bg: "#FFFBEB",
    },
  ];

  const workflowCards = [
    {
      icon: Search,
      title: "Search faster",
      description:
        "Use a central search experience instead of opening many different sources one by one.",
      color: "#1D4ED8",
      bg: "#EFF6FF",
    },
    {
      icon: Filter,
      title: "Filter with clarity",
      description:
        "Narrow results by university type, location, major, and tuition range to save time.",
      color: "#0F766E",
      bg: "#ECFDF5",
    },
    {
      icon: Lightbulb,
      title: "Decide with confidence",
      description:
        "Compare options in a structured way so the final choice feels more informed and less overwhelming.",
      color: "#B45309",
      bg: "#FFFBEB",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-gray-900">
      <AboutHero />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <AboutSectionHeader
          eyebrow="Why NextStep exists"
          title="Built around the real problems students face"
          description="The platform was shaped to reduce time spent searching across different websites and to make it easier for students to discover the right academic path."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {missionCards.map((card) => (
            <AboutCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              color={card.color}
              bg={card.bg}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <AboutSectionHeader
            eyebrow="Platform goals"
            title="A centralized platform for educational discovery"
            description="NextStep brings the most important education choices into one clean experience, helping students explore, compare, and plan with less friction."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {platformCards.map((card) => (
              <AboutCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                color={card.color}
                bg={card.bg}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <AboutSectionHeader
          eyebrow="Student experience"
          title="Designed to save time and support better choices"
          description="NextStep combines search, filtering, and personalized guidance to make the university selection process simpler and more focused."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {workflowCards.map((card) => (
            <AboutCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              color={card.color}
              bg={card.bg}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-4xl bg-linear-to-br from-sky-600 via-blue-600 to-indigo-700 px-6 py-12 text-white shadow-2xl shadow-blue-200 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">
                NextStep for Cambodian students
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A clearer way to explore universities, majors, and scholarships.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-sky-50/90 sm:text-base">
                NextStep is focused on accessibility, guidance, and informed
                decision-making so students can move forward with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Link
                to="/universities"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50"
              >
                Explore universities
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/scholarships"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Search scholarships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
