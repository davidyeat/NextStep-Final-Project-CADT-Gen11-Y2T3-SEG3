import UniversityDetailSection from '../components/university-details/UniversityDetailSection';
import { asBulletList } from '../utils/universityDetails';

export default function UniversityCosts({ university }) {
    const rawCosts = university?.costs ?? university?.Costs ?? university?.tuitionFee ?? university?.tuition_fee;
    const costItems = asBulletList(
        Array.isArray(rawCosts) || typeof rawCosts === 'string'
            ? rawCosts
            : rawCosts
                ? [String(rawCosts)]
                : []
    );

    return (
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_360px]">
            <div className="space-y-6">
                <UniversityDetailSection
                    eyebrow="Costs"
                    title="Tuition and fees"
                    description="Official cost details will be added here once the backend starts returning fee data."
                >
                    {costItems.length > 0 ? (
                        <div className="space-y-4">
                            {costItems.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5 text-sm leading-6 text-gray-600"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-[#D6D3D1] bg-[#FAFAF9] px-6 py-10 text-center">
                            <p className="text-sm leading-7 text-gray-500">
                                Cost information is not available yet, so this section stays as a placeholder for now.
                            </p>
                        </div>
                    )}
                </UniversityDetailSection>
            </div>
        </section>
    );
}