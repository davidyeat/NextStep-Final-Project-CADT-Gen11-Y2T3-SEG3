import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapPin, Tag, GraduationCap, Calendar, CheckCircle2, BookOpen, Award, FileText, ChartNoAxesCombined } from "lucide-react";
import ScholarshipDetailHero from "../components/scholarship-details/ScholarshipDetailHero";
import InfoStat from "../components/scholarship-details/InfoStat";
import ScholarshipDetailSection from "../components/scholarship-details/ScholarshipDetailSection";
import ScholarshipDetailSidebar from "../components/scholarship-details/ScholarshipDetailSidebar";
import formatAmount from "../utils/formatAmount";
import asParagraphs from "../utils/convertToParagraphs";
import RenderList from "../components/scholarship-details/RenderList";
import { getScholarshipFullDetail } from "../services/scholarshipService";

export default function ScholarshipDetail() {
  const { scholarshipId } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchScholarship = async () => {
      try {
        setLoading(true);
        const scholarshipData = await getScholarshipFullDetail(scholarshipId);
        console.log("Fetched scholarship data:", scholarshipData); // Debugging log
        setScholarship(scholarshipData);
      } catch (error) {
        setError("Unable to load scholarship details right now.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarship();
  }, [scholarshipId]);

  // Loading...
  if (loading) {
    return (
      <main className="min-h-screen bg-[#FAFAF9] px-6 py-16 text-gray-900 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-[#D6D3D1] bg-white px-6 py-12 text-center">
          <h1 className="text-2xl font-semibold text-gray-950">
            Loading scholarship details...
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Please wait while we fetch the scholarship information.
          </p>
        </div>
      </main>
    );
  }

  // Something went wrong...
  if (error) {
    return (
      <main className="min-h-screen bg-[#FAFAF9] px-6 py-16 text-gray-900">
        <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-[#D6D3D1] bg-white px-6 py-12 text-center">
          <h1 className="text-2xl font-semibold text-gray-950">
            Error loading scholarship details
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            We encountered an error while loading the scholarship information.
          </p>
        </div>
      </main>
    );
  }

  const quickInfoStats = [
    { 
      label: "Study In", 
      value: `${scholarship?.studyIn}`, 
      icon: <MapPin /> },
    {
      label: "Amount",
      value: `${formatAmount(scholarship?.minAmount)} - ${formatAmount(scholarship?.maxAmount)}`,
      icon: <Tag />,
    },
    {
      label: "Degree",
      value: scholarship?.degreeLevel,
      icon: <GraduationCap />,
    },
    {
      label: "Deadline",
      value: scholarship?.applicationDeadline,
      icon: <Calendar />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-slate-900">
      <ScholarshipDetailHero scholarships={scholarship} />
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">

        {/* Quick Info Card */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {quickInfoStats.map((stat, index) => (
              <InfoStat
                key={index}
                label={stat.label}
                icon={stat.icon}
                value={stat.value}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2">
              {/* Description */}
              <ScholarshipDetailSection
                icon={<BookOpen className="h-5 w-5" />}
                title="About This Scholarship"
                description={scholarship.description}
              >
                <p className="text-sm leading-relaxed text-gray-600">
                  {scholarship?.description || "No description available."}
                </p>
              </ScholarshipDetailSection>

              {/* Benefits */}
              <RenderList 
                icon={<Award className="h-5 w-5" />}  
                title="Scholarship Benefits"
                items={scholarship?.benefits}
              />

              {/* Major Offered */}
              <RenderList 
                icon={<GraduationCap className="h-5 w-5" />}  
                title="Majors Offered"
                items={scholarship?.majorOffered}
              />

              {/* Application Process */}
              <RenderList 
                icon={<ChartNoAxesCombined className="h-5 w-5"/>}
                title="Application Process"
                items={scholarship?.applicationProcess}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Eligibility */}
              <ScholarshipDetailSidebar 
                icon={< CheckCircle2 className="h-5 w-5" />}  
                title="Eligibility Requirements"
                items={asParagraphs(scholarship?.eligibilityCriteria)}
              />

              {/* Required Documents */}
              <ScholarshipDetailSidebar 
                icon={<FileText className="h-5 w-5"/>}
                title="Required Documents"
                items={asParagraphs(scholarship?.documentRequirements)}
              />
            </div>

          </div>  
      </div>
    </main>
  );
}
