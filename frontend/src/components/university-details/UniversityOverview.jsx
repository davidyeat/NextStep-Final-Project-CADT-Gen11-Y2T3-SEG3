import asParagraphs from "../../utils/convertToParagraphs";
import RenderList from "../scholarship-details/RenderList";
import ScholarshipDetailSection from "../scholarship-details/ScholarshipDetailSection";
import { BookOpen, Goal, Lightbulb } from "lucide-react";

export default function UniversityOverview({ university }) {
    return (
        <section className="bg-white rounded-xl border border-[#E7E5E4] shadow-[0_18px_45px_rgba(15,23,42,0.06)] scroll-mt-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div>
                {/* Header */}
                <div>
                    <h1 className="font-heading font-bold text-3xl sm:text-3xl md:text-4xl text-gray-900 mb-2">
                        Overview
                    </h1>
                    <div className="border-b-2 border-[#007BFE] w-16 mb-8"></div>
                </div>

                <div>
                    {/* Description */}
                    <ScholarshipDetailSection 
                        icon={<BookOpen className="w-5 h-5"/>}
                        title={`About ${university.campusName}`}
                        description={university.description}
                    />

                    {/* Mission and Vision */}
                    <div className="grid gap-4 lg:grid-cols-2">
                        <RenderList
                            icon={<Goal className="w-5 h-5"/>}
                            title="Mission"
                            items={asParagraphs(university.mission)}
                        />
                        <RenderList
                            icon={<Lightbulb className="w-5 h-5"/>}
                            title="Vision"
                            items={asParagraphs(university.vision)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
