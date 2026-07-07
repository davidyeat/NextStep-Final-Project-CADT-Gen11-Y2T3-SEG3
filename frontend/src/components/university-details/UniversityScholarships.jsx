import UniversityDetailSection from './UniversityDetailSection';
import UniversityDetailSplitLayout from './UniversityDetailSplitLayout';
import { getAssociationList } from '../../utils/universityDetails';

const scholarshipTitle = (scholarship) => {
    return scholarship?.name || scholarship?.title || scholarship?.scholarshipName || 'Scholarship';
};

const formatDeadline = (deadline) => {
    if (!deadline) {
        return 'Deadline not provided';
    }

    const parsedDate = new Date(deadline);

    if (Number.isNaN(parsedDate.getTime())) {
        return 'Deadline not provided';
    }

    return parsedDate.toLocaleDateString();
};

export default function UniversityScholarships({ university }) {
    const scholarships = getAssociationList(university, ['Scholarships', 'scholarships']);

    return (
        <UniversityDetailSplitLayout>
                <UniversityDetailSection
                    eyebrow="Scholarships"
                    title="Funding opportunities"
                    description="Scholarship records are pulled from the university-to-scholarship database relationship."
                >
                    {scholarships.length > 0 ? (
                        <div className="space-y-4">
                            {scholarships.map((scholarship) => (
                                <div
                                    key={scholarship.scholarshipId || scholarship.id || scholarshipTitle(scholarship)}
                                    className="rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <p className="text-lg font-semibold text-gray-950">
                                                {scholarshipTitle(scholarship)}
                                            </p>
                                            {scholarship.description && (
                                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                                    {scholarship.description}
                                                </p>
                                            )}
                                        </div>

                                        {scholarship.status && (
                                            <span className="rounded-full bg-[#00D4FF]/10 px-3 py-1 text-xs font-medium text-[#0EA5C6]">
                                                {scholarship.status}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-xl bg-white px-4 py-3 text-sm text-gray-600">
                                            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                                                Amount
                                            </span>
                                            <span className="mt-1 block text-gray-900">
                                                {scholarship.amount && scholarship.currency
                                                    ? `${scholarship.currency} ${scholarship.amount}`
                                                    : scholarship.amount || 'Not provided'}
                                            </span>
                                        </div>
                                        <div className="rounded-xl bg-white px-4 py-3 text-sm text-gray-600">
                                            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                                                Degree level
                                            </span>
                                            <span className="mt-1 block text-gray-900">
                                                {scholarship.degreeLevel || 'Not provided'}
                                            </span>
                                        </div>
                                        <div className="rounded-xl bg-white px-4 py-3 text-sm text-gray-600">
                                            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                                                Study in
                                            </span>
                                            <span className="mt-1 block text-gray-900">
                                                {scholarship.studyIn || 'Not provided'}
                                            </span>
                                        </div>
                                        <div className="rounded-xl bg-white px-4 py-3 text-sm text-gray-600">
                                            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                                                Deadline
                                            </span>
                                            <span className="mt-1 block text-gray-900">
                                                {formatDeadline(scholarship.applicationDeadline)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-[#D6D3D1] bg-[#FAFAF9] px-6 py-10 text-center">
                            <p className="text-sm leading-7 text-gray-500">
                                Scholarship information is not linked to this university yet.
                            </p>
                        </div>
                    )}
                </UniversityDetailSection>
        </UniversityDetailSplitLayout>
    );
}