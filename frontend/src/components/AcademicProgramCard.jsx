import { ChevronRight } from "lucide-react";

export default function AcademicProgramCard({icon, faculty }) {
    const majors = faculty.Majors;
    console.log(majors);
    
    return (
        <div className="mt-4 max-w-screen bg-[#F5F5F4] px-4 py-3 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
                <span className="h-11 w-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-blue-600">
                    {icon}
                </span>
                <span className="font-heading text-[#007BFE] text-lg sm:text-xl leading-snug font-bold">
                    {faculty.name}
                </span>
            </div>
            {/* <p className="font-body space-y-1.2 text-[16px] leading-7 text-gray-700 mt-4">
                {academicPrograms.description}
            </p> */}

            {/* Majors */}
            <div className="mt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Available Majors
                </h3>
                
                {faculty.Majors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {majors.map((major, index) => (
                            <div 
                                key={major.id || index}
                                className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-lg border border-gray-200 text-gray-800 text-sm font-medium hover:border-[#007BFE] hover:text-[#007BFE] transition-colors cursor-pointer group"
                            >
                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#007BFE] transition-colors shrink-0" />
                                <span>{major.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-gray-400 italic">No majors listed under this faculty.</p>
                )}
            </div>
        </div>
    );
}