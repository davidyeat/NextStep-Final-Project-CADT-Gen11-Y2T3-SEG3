import asParagraphs from '../../utils/convertToParagraphs';
import RenderList from './RenderList';

export default function UniversityOverview({ university }) {
    return (
        <section className="mx-auto max-w-7xl lg:px-10 bg-white md:p4 sm:p-2 rounded-lg shadow:md mb-4 scroll-mt-8 pb-6">
            <div className="p-2 md:p-3 lg:p-6 bg-white rounded">
                <h1 className="text-lg md:text-2xl lg:text-4xl font-serif font-black text-gray-900 mb-2">
                    Overview
                </h1>
                <div className="border-b-2 border-blue-600 w-16 mb-6"></div>
                <div className="max-w-screen">
                    <h1 className="text-2xl font-serif font-black text-gray-900">
                        About {university.campusName}
                    </h1>
                    <p className="space-y-1.5 text-[16px] leading-7 text-gray-900 mt-4">
                        {university.description}
                    </p>
                    <RenderList
                        title="Mission"
                        items={asParagraphs(university.mission)}
                    />
                    <RenderList
                        title="Vision"
                        items={asParagraphs(university.vision)}
                    />
                </div>
            </div>
        </section>
    );
}