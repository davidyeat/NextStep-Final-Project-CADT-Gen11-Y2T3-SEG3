import { Building2 } from 'lucide-react';
import UniversityDetailSection from './UniversityDetailSection';
import UniversityDetailSplitLayout from './UniversityDetailSplitLayout';
import { getAssociationList } from '../../utils/universityDetails';

export default function UniversityFacilities({ university }) {
    const facilities = getAssociationList(university, ['Facilities', 'facilities']);

    return (
        <UniversityDetailSplitLayout>
                <UniversityDetailSection
                    eyebrow="Facilities"
                    title="Campus facilities"
                    description="Facilities are loaded from the university record and its related database entries."
                >
                    {facilities.length > 0 ? (
                        <div className="grid gap-4 sm:grid-cols-2">
                            {facilities.map((facility) => (
                                <article
                                    key={facility.facilityId || facility.name}
                                    className="overflow-hidden rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9]"
                                >
                                    <div className="flex h-40 items-center justify-center bg-[#F5F5F4]">
                                        {facility.imageUrl ? (
                                            <img
                                                src={facility.imageUrl}
                                                alt={facility.name || 'Facility image'}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <Building2 className="h-10 w-10 text-[#9CA3AF]" />
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <p className="text-lg font-semibold text-gray-950">
                                            {facility.name || 'Facility'}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-[#D6D3D1] bg-[#FAFAF9] px-6 py-10 text-center">
                            <p className="text-sm leading-7 text-gray-500">
                                Facility information has not been linked yet.
                            </p>
                        </div>
                    )}
                </UniversityDetailSection>
        </UniversityDetailSplitLayout>
    );
}