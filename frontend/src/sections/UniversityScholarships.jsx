import UniversityDetailSection from '../components/university-details/UniversityDetailSection';
import { getAssociationList } from '../utils/universityDetails';

const scholarshipTitle = (scholarship) => {
    return scholarship?.name || scholarship?.title || scholarship?.scholarshipName || 'Scholarship';
};

export default function UniversityScholarships({ university }) {
    const scholarships = getAssociationList(university, ['Scholarships', 'scholarships']);

    return (
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_360px]">
            <div className="space-y-6">
                <UniversityDetailSection
                    eyebrow="Scholarships"
                    title="Funding opportunities"
                    description="Scholarship listings will appear here once the backend exposes them."
                >
                    {scholarships.length > 0 ? (
                        <div className="space-y-4">
                            {scholarships.map((scholarship) => (
                                <div
                                    key={scholarship.scholarshipId || scholarship.id || scholarshipTitle(scholarship)}
                                    className="rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5"
                                >
                                    <p className="text-lg font-semibold text-gray-950">
                                        {scholarshipTitle(scholarship)}
                                    </p>
                                    {scholarship.description && (
                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            {scholarship.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-[#D6D3D1] bg-[#FAFAF9] px-6 py-10 text-center">
                            <p className="text-sm leading-7 text-gray-500">
                                Scholarship information is not available yet, so this section remains a placeholder.
                            </p>
                        </div>
                    )}
                </UniversityDetailSection>
            </div>
        </section>
    );
}