import { MapPin } from 'lucide-react';
import UniversityDetailSection from './UniversityDetailSection';
import UniversityDetailSplitLayout from './UniversityDetailSplitLayout';

const fieldValue = (value) => value || 'Not provided yet';

export default function UniversityLocation({ university }) {
    const cityProvince = [university?.city, university?.province].filter(Boolean).join(', ');

    return (
        <UniversityDetailSplitLayout>
                <UniversityDetailSection
                    eyebrow="Location"
                    title="Where to find us"
                    description="Location details are taken directly from the university record."
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">City / Province</p>
                            <p className="mt-2 text-sm leading-6 text-gray-700">{fieldValue(cityProvince)}</p>
                        </div>

                        <div className="rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Address</p>
                            <p className="mt-2 text-sm leading-6 text-gray-700">{fieldValue(university?.address)}</p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-[#E7E5E4] bg-[#0F172A] p-5 text-white">
                        <div className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#00D4FF]" />
                            <div>
                                <p className="text-sm font-medium text-[#CBD5E1]">Official location record</p>
                                <p className="mt-1 text-sm leading-6 text-[#E2E8F0]">{fieldValue(university?.address || cityProvince)}</p>
                            </div>
                        </div>
                    </div>
                </UniversityDetailSection>
        </UniversityDetailSplitLayout>
    );
}