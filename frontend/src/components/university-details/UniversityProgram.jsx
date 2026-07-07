import AcademicProgramCard from '../../components/AcademicProgramCard';

export default function UniversityProgram({ university }) {
	const academicPrograms = university.AcademicUnits;
	console.log(academicPrograms);

    return (
        <section className="mx-auto max-w-7xl lg:px-10 bg-white md:p4 sm:p-2 rounded-lg shadow:md mb-4 scroll-mt-4 pb-6">
            <div className="p-2 md:p-3 lg:p-6 bg-white rounded">
                <h1 className="text-lg md:text-2xl lg:text-4xl font-serif font-black text-gray-900 mb-2">
                    Academic Program
                </h1>
                <div className="border-b-2 border-blue-600 w-16 mb-6"></div>
				<div className="flex flex-col gap-4">
					{academicPrograms.map((program) => (
						<AcademicProgramCard key={program.academicUnitId} academicPrograms={program} />
					))}
				</div>
            </div>
        </section>
    );
}