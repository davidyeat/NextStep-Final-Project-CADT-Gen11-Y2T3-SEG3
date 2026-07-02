import asParagraphs from '../utils/convertToParagraphs';
import UniversityDetailSection from '../components/university-details/UniversityDetailSection';
import MissionVisionCard from '../components/university-details/MissionVisionCard';

const renderList = (items, emptyMessage) => {
    if (!items.length) {
        return <p className="mt-3 text-sm leading-7 text-gray-500">{emptyMessage}</p>;
    }

    return (
        <ul className="mt-3 space-y-3 pl-5 text-sm leading-7 text-gray-600 list-disc">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default function UniversityOverview({ university }) {
    const missionItems = asParagraphs(university.mission);
    const visionItems = asParagraphs(university.vision);
    const description = asParagraphs(university.description).join(' ');

    return (
        <section className="mx-auto max-w-7xl space-y-10 px-6 pb-10 lg:px-10">
            <div className="space-y-6">
                <UniversityDetailSection
                    eyebrow="Overview"
                    title={`About ${university.campusName}`}
                    description={description || undefined}
                >
                </UniversityDetailSection>

                <div className="flex gap-2 lg:grid-cols-2">
                    <MissionVisionCard
                        icon={UniversityDetailSection}
                        title="Mission"
                        items={missionItems}
                    />
                    <MissionVisionCard
                        icon={UniversityDetailSection}
                        title="Vision"
                        items={visionItems}
                    />
                </div>
            </div>
        </section>
    );
}