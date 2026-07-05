import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AsideDetail from "../components/AsideDetails";
import UniversityDetailsHero from "../sections/UniversityDetailsHero";
import { getUniversityFullDetail } from "../services/universityService";
import UniversityOverview from "../sections/UniversityOverview";
import UniversityProgram from "../sections/UniversityProgram";

const asideTabs = [
    {label: "Overview", value: "overview"},
    {label: "Program", value: "program"},
    {label: "Admission", value: "admissions"},
    {label: "Scholarships", value: "scholarships"},
    {label: "Facilities", value: "facilities"},
    {label: "Campus Life", value: "campus_life"},
    {label: "Location", value: "location"},
    {label: "Contact", value: "contact"}
];

export default function UniversityDetails() {
    const { universityId } = useParams();
    const [university, setUniversity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUniversity = async() => {
            try {
                const universityData = await getUniversityFullDetail(universityId);
                setUniversity(universityData);
            } catch (error) {
                setError("Unable to fetched university", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUniversity();
    }, [universityId]);

    
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
        <div className="min-h-screen bg-[#FAFAF9]">
            <UniversityDetailsHero university={university}/>
            <div className="mx-auto max-w-7xl space-y-10 px-6 pb-10 lg:px-10 mt-6 ">
                <div className="flex flex-col lg:flex-row gap-8">
                    <AsideDetail title={university.campusName}/>
                    <main id="main-content" className="w-full lg:w-5/6 flex-1 min-h-screen scroll-smooth">
                        <UniversityOverview university={university}/>
                        <UniversityProgram university={university}/>
                    </main>
                </div>
            </div>
        </div>
    );
}