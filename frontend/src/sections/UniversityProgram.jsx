import { BookOpen } from 'lucide-react';
import UniversityDetailSection from '../components/university-details/UniversityDetailSection';
import { getAssociationList } from '../utils/universityDetails';

const getDepartmentMajors = (department) => {
	return getAssociationList(department, ['Majors', 'majors', 'Major', 'major']);
};

const ProgramCard = ({ department }) => {
	const majors = getDepartmentMajors(department);

	return (
		<div className="rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5 transition-colors hover:border-[#D6D3D1]">
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="text-lg font-semibold text-gray-950">{department.name}</p>
					{department.description && <p className="mt-2 text-sm leading-6 text-gray-600">{department.description}</p>}
				</div>
				<span className="rounded-full bg-[#0D1220] px-3 py-1 text-xs font-medium text-white">
					{majors.length} programs
				</span>
			</div>

			{majors.length > 0 ? (
				<div className="mt-4 flex flex-wrap gap-2">
					{majors.map((major) => (
						<span
							key={major.majorId || major.name}
							className="rounded-full bg-[#00D4FF]/10 px-3 py-1 text-xs font-medium text-[#0EA5C6]"
						>
							{major.name}
						</span>
					))}
				</div>
			) : (
				<p className="mt-4 text-sm text-gray-500">Program details have not been added yet.</p>
			)}
		</div>
	);
};

export default function UniversityProgram({ university }) {
	const departments = getAssociationList(university, ['Departments', 'departments']);
	const programCount = departments.reduce((total, department) => total + getDepartmentMajors(department).length, 0);

	return (
		<section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_360px]">
			<div className="space-y-6">
				<UniversityDetailSection
					eyebrow="Programs"
					title="Academic pathways"
					description="Browse the university's academic structure by department and program area."
				>
					{departments.length > 0 ? (
						<div className="space-y-4">
							{departments.map((department) => (
								<ProgramCard key={department.departmentId || department.name} department={department} />
							))}
						</div>
					) : Array.isArray(university.programs) && university.programs.length > 0 ? (
						<div className="space-y-4">
							{university.programs.map((program) => (
								<div
									key={program.id || program.name || program}
									className="rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5"
								>
									<p className="text-lg font-semibold text-gray-950">
										{program.name || program.title || program}
									</p>
									{program.description && (
										<p className="mt-2 text-sm leading-6 text-gray-600">{program.description}</p>
									)}
								</div>
							))}
						</div>
					) : (
						<div className="rounded-2xl border border-dashed border-[#D6D3D1] bg-[#FAFAF9] px-6 py-10 text-center">
							<BookOpen className="mx-auto h-10 w-10 text-[#9CA3AF]" />
							<h4 className="mt-4 text-lg font-semibold text-gray-950">Programs will appear here</h4>
							<p className="mt-2 text-sm text-gray-500">
								Once the university programs are linked to the detail page, they will render in this tab.
							</p>
						</div>
					)}
				</UniversityDetailSection>
			</div>

			<aside className="space-y-6">
				<UniversityDetailSection title="Program summary" className="p-5">
					<div className="space-y-4">
						<div className="rounded-2xl bg-[#0D1220] p-5 text-white">
							<p className="text-sm text-white/70">Departments</p>
							<p className="mt-2 text-3xl font-semibold">{departments.length || '0'}</p>
						</div>
						<div className="rounded-2xl bg-[#F8FAFC] p-5">
							<p className="text-sm text-gray-500">Programs</p>
							<p className="mt-2 text-3xl font-semibold text-gray-950">{programCount || '0'}</p>
						</div>
					</div>
				</UniversityDetailSection>

				<UniversityDetailSection
					eyebrow="Explore more"
					title="Compare departments"
					description="Use the cards above to compare study areas and move toward the Admissions tab when you are ready."
					className="p-5"
				/>
			</aside>
		</section>
	);
}
