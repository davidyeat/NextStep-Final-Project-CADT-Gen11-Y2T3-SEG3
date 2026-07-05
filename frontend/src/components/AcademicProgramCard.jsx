import { Building2 } from "lucide-react";

export default function AcademicProgramCard({ academicPrograms }) {
    return (
        <div className="mt-4 max-w-screen">
            <div className="space-y-1.5 pl-5 text-[16px] leading-7 text-gray-900">
                <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-600"/>
                    <h3 className="text-xl font-black text-gray-900">
                        {academicPrograms.name}
                    </h3>
                </div>
                <p className="space-y-1.2 text-[16px] leading-7 text-gray-900 mt-4">
                    {academicPrograms.description}
                </p>
            </div>
        </div>
    );
}