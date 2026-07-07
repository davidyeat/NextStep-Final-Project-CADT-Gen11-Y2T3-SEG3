import UniversityDetailSection from './UniversityDetailSection';
import UniversityDetailSplitLayout from './UniversityDetailSplitLayout';
import asParagraphs from '../../utils/convertToParagraphs';

const ParagraphList = ({ items }) => {
    if (!items.length) {
        return null;
    }

    return (
        <div className="space-y-3 text-sm leading-7 text-gray-600">
            {items.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </div>
    );
};

export default function UniversityCampusLife({ university }) {
    const descriptionItems = asParagraphs(university?.description);
    const missionItems = asParagraphs(university?.mission);
    const visionItems = asParagraphs(university?.vision);

    return (
        <UniversityDetailSplitLayout>
                <UniversityDetailSection
                    eyebrow="Campus Life"
                    title="Student experience"
                    description="This section is built from the university description, mission, and vision stored in the database."
                >
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-base font-semibold text-gray-950">About campus life</h4>
                            <div className="mt-3">
                                <ParagraphList items={descriptionItems} />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-gray-950">Mission</h4>
                            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                                {missionItems.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-gray-950">Vision</h4>
                            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                                {visionItems.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </UniversityDetailSection>
        </UniversityDetailSplitLayout>
    );
}