import { Shield, BarChart2, Award, TrendingUp } from "lucide-react";
import WhyCard from "../components/WhyCard";
import SectionHeader from "../components/SectionHeader";

export default function WhySection() {
  const whyCards = [
    {
      icon: Shield,
      title: "Unbiased Information",
      desc: "We provide accurate and unbiased information about universities, majors, and scholarships to help you make informed decisions.",
      color: "#1E3A8A",
      bg: "#EFF6FF",
    },
    {
      icon: BarChart2,
      title: "Data-Driven Insights",
      desc: "Our platform leverages data to provide insights into university rankings, scholarship opportunities, and career prospects.",
      color: "#10B981",
      bg: "#F0FDF4",
    },
    {
      icon: Award,
      title: "Scholarship Opportunities",
      desc: "We help you discover scholarships that match your profile, making higher education more accessible and affordable.",
      color: "#7C3AED",
      bg: "#F5F3FF",
    },
    {
      icon: TrendingUp,
      title: "Personalized Recommendation",
      desc: "Our platform offers personalized recommendations based on your interests, academic background, and career goals.",
      color: "#D97706",
      bg: "#FFFBEB",
    },
  ];

  return (
    <section className="border-y border-gray-200 bg-[#FAFAF9] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why NextStep"
          title="Designed to make educational discovery easier"
          description="We understand the challenges Cambodian students face when choosing their educational path. NextStep is built to make the process simpler, faster, and more informed."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyCards.map((card) => (
          <WhyCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.desc}
            color={card.color}
            bg={card.bg}
          />
        ))}
        </div>
      </div>
    </section>
  );
}
