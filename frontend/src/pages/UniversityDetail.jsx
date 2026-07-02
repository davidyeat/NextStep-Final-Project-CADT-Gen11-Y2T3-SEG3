import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import UniversityDetailsHero from "../sections/UniversityDetailsHero";
import UniversityDetailTabs from "../components/university-details/UniversityDetailTabs";
import { getUniversityById } from "../services/universityService";
import UniversityOverview from "../sections/UniversityOverview";
import UniversityProgram from "../sections/UniversityProgram";
import UniversityAdmission from "../sections/UniversityAdmission";
import UniversityCosts from "../sections/UniversityCosts";
import UniversityScholarships from "../sections/UniversityScholarships";

const detailTabs = [
  { label: "Overview", value: "overview" },
  { label: "Programs", value: "programs" },
  { label: "Admissions", value: "admissions" },
  { label: "Costs", value: "costs" },
  { label: "Scholarships", value: "scholarships" },
];

export default function UniversityDetail() {
  const { universityId } = useParams();
  const [university, setUniversity] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        setLoading(true);
        const response = await getUniversityById(universityId);
        setUniversity(response);
      } catch (err) {
        console.error("Failed to load university:", err);
        setError("Unable to load university details right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchUniversity();
  }, [universityId]);

  useEffect(() => {
    if (!university) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveTab(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    detailTabs.forEach(({ value }) => {
      const element = document.getElementById(value);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [university]);

  const handleTabChange = (sectionId) => {
    setActiveTab(sectionId);

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-600">Loading university details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Unable to load university
        </h1>
        <p className="mt-2 text-gray-600">{error}</p>
        <Link
          to="/universities"
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Back to Universities
        </Link>
      </div>
    );
  }

  if (!university) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-900">
          University Not Found
        </h1>
        <p className="mt-2 text-gray-600">
          The university you are looking for does not exist.
        </p>
        <Link
          to="/universities"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Universities
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-gray-900">
      <UniversityDetailsHero university={university} />

      <div className="mx-auto max-w-7xl sticky top-16.25 z-40 pt-4 px-6 lg:px-10">
        <UniversityDetailTabs
          tabs={detailTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      <section className="mx-auto max-w-7xl space-y-10 px-6 pb-10 lg:px-10">
        <div id="overview" className="scroll-mt-32">
          <UniversityOverview university={university} />
        </div>

        <div id="programs" className="scroll-mt-32">
          <UniversityProgram university={university} />
        </div>

        <div id="admissions" className="scroll-mt-32">
          <UniversityAdmission university={university} />
        </div>

        <div id="costs" className="scroll-mt-32">
          <UniversityCosts university={university} />
        </div>

        <div id="scholarships" className="scroll-mt-32">
          <UniversityScholarships university={university} />
        </div>
      </section>
    </main>
  );
}
