import AcademicProgramCard from '../../components/AcademicProgramCard';
import { Building2 } from 'lucide-react';

export default function UniversityProgram({ university }) {
	const faculties = university.AcademicUnits;

    return (
        <section className="bg-white rounded-xl border border-[#E7E5E4] shadow-[0_18px_45px_rgba(15,23,42,0.06)] scroll-mt-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div>
                {/* Header */}
                <div>
                    <h1 className="font-heading font-bold text-2xl sm:text-2xl md:text-3xl text-gray-900 mb-2">
                        Academic Programs
                    </h1>
                    <div className="border-b-2 border-[#007BFE] w-16 mb-4"></div>
                </div>
				<div className="flex flex-col gap-4">
					{faculties.map((program) => (
						<AcademicProgramCard 
                            key = {program.academicUnitId} 
                            icon= {<Building2 className="w-5 h-5"/>}
                            faculty = {program} 
                        />
					))}
				</div>
            </div>
        </section>
    );
}