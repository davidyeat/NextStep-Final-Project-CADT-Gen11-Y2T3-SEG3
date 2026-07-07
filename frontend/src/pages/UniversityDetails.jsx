import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import UniversityDetailSidebar from "../components/university-details/UniversityDetailSidebar";
import UniversityDetailsHero from "../components/university-details/UniversityDetailsHero";
import UniversityOverview from "../components/university-details/UniversityOverview";
import UniversityProgram from "../components/university-details/UniversityProgram";
import UniversityAdmission from "../components/university-details/UniversityAdmission";
import UniversityScholarships from "../components/university-details/UniversityScholarships";
import UniversityFacilities from "../components/university-details/UniversityFacilities";
import UniversityCampusLife from "../components/university-details/UniversityCampusLife";
import UniversityLocation from "../components/university-details/UniversityLocation";
import UniversityContact from "../components/university-details/UniversityContact";
import { getUniversityFullDetail } from "../services/universityService";

const detailTabs = [
    { label: "Overview", value: "overview" },
    { label: "Program", value: "program" },
    { label: "Admission", value: "admission" },
    { label: "Scholarships", value: "scholarships" },
    { label: "Facilities", value: "facilities" },
    { label: "Campus Life", value: "campus-life" },
    { label: "Location", value: "location" },
    { label: "Contact", value: "contact" },
];

export default function UniversityDetails() {
    const { universityId } = useParams();
    const [university, setUniversity] = useState(null);
    const [activeTab, setActiveTab] = useState("overview");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUniversity = async () => {
            try {
                setLoading(true);
                const universityData = await getUniversityFullDetail(universityId);
                setUniversity(universityData);
            } catch (error) {
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

    
    // Loading...
    if(loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-gray-600">Loading university details...</p>
            </div>
        );
    }

    // Not found... 
    if(!university) {
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

    // Something wrong...
    if(error) {
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

    return (
        <main className="min-h-screen bg-[#FAFAF9] text-gray-900">
            <UniversityDetailsHero university={university} />

            <div className="mx-auto max-w-7xl px-6 pb-10 pt-6 lg:px-10">
                <div className="flex flex-col gap-8 lg:flex-row">
                    <UniversityDetailSidebar
                        title={university.campusName}
                        tabs={detailTabs}
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                    />

                    <div id="main-content" className="w-full flex-1 space-y-10 scroll-smooth">
                        <div id="overview" className="scroll-mt-32">
                            <UniversityOverview university={university} />
                        </div>

                        <div id="program" className="scroll-mt-32">
                            <UniversityProgram university={university} />
                        </div>

                        <div id="admission" className="scroll-mt-32">
                            <UniversityAdmission university={university} />
                        </div>

                        <div id="scholarships" className="scroll-mt-32">
                            <UniversityScholarships university={university} />
                        </div>

                        <div id="facilities" className="scroll-mt-32">
                            <UniversityFacilities university={university} />
                        </div>

                        <div id="campus-life" className="scroll-mt-32">
                            <UniversityCampusLife university={university} />
                        </div>

                        <div id="location" className="scroll-mt-32">
                            <UniversityLocation university={university} />
                        </div>

                        <div id="contact" className="scroll-mt-32">
                            <UniversityContact university={university} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}