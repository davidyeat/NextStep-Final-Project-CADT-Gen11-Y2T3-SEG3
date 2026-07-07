import { CheckCircle2, ClipboardList, Mail, Phone } from 'lucide-react';
import UniversityDetailSection from './UniversityDetailSection';
import UniversityDetailSplitLayout from './UniversityDetailSplitLayout';
import { asBulletList, getAssociationList } from '../../utils/universityDetails';

const AdmissionCard = ({ admission }) => {
	const requirements = asBulletList(admission.requirements);

	return (
		<div className="rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5">
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="text-lg font-semibold text-gray-950">{admission.title || 'Admission requirements'}</p>
					{admission.description && (
						<p className="mt-2 text-sm leading-6 text-gray-600">{admission.description}</p>
					)}
				</div>
				<ClipboardList className="h-5 w-5 shrink-0 text-[#0EA5C6]" />
			</div>

			{requirements.length > 0 ? (
				<ul className="mt-4 space-y-3">
					{requirements.map((item) => (
						<li key={item} className="flex gap-3 text-sm leading-6 text-gray-600">
							<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5C6]" />
							<span>{item}</span>
						</li>
					))}
				</ul>
			) : (
				<p className="mt-4 text-sm text-gray-500">Requirements have not been provided yet.</p>
			)}
		</div>
	);
};

export default function UniversityAdmission({ university }) {
	const admissions = getAssociationList(university, ['Admissions', 'admissions']);

	const fallbackChecklist = [
		'Completed application form',
		'Academic transcript or grade report',
		'National ID card or passport copy',
		'Recent passport-size photograph',
	];

	return (
		<UniversityDetailSplitLayout
			aside={
				<>
					<UniversityDetailSection title="Application checklist" className="p-5">
						<div className="space-y-3">
							{fallbackChecklist.map((item) => (
								<div key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-600">
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5C6]" />
									<span>{item}</span>
								</div>
							))}
						</div>
					</UniversityDetailSection>

					<UniversityDetailSection
						eyebrow="Need help"
						title="Contact the admissions office"
						description="Use the university contact details below to confirm deadlines, document requirements, and interview steps."
						className="p-5"
					>
						<div className="space-y-3 text-sm text-gray-600">
							{university.phoneNumber && (
								<div className="flex items-center gap-3">
									<Phone className="h-4 w-4 text-[#8899AA]" />
									<span>{university.phoneNumber}</span>
								</div>
							)}
							{university.email && (
								<div className="flex items-center gap-3">
									<Mail className="h-4 w-4 text-[#8899AA]" />
									<span>{university.email}</span>
								</div>
							)}
						</div>
					</UniversityDetailSection>
				</>
			}
		>
				<UniversityDetailSection
					eyebrow="Admissions"
					title="How to apply"
					description="Review the published requirements first, then prepare the supporting documents before submitting an application."
				>
					{admissions.length > 0 ? (
						<div className="space-y-4">
							{admissions.map((admission) => (
								<AdmissionCard
									key={admission.admissionId || admission.title}
									admission={admission}
								/>
							))}
						</div>
					) : (
						<div className="rounded-2xl border border-dashed border-[#D6D3D1] bg-[#FAFAF9] px-6 py-10 text-center">
							<ClipboardList className="mx-auto h-10 w-10 text-[#9CA3AF]" />
							<h4 className="mt-4 text-lg font-semibold text-gray-950">Admission details will appear here</h4>
							<p className="mt-2 text-sm text-gray-500">
								When admission records are linked to the university, they will render in this tab.
							</p>
						</div>
					)}
				</UniversityDetailSection>
		</UniversityDetailSplitLayout>
	);
}