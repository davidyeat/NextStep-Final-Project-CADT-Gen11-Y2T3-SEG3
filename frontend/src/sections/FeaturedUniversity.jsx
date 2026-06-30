import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';


export default function FeaturedUniversity() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <div className="flex items-end justify-between gap-6">
                <SectionHeader
                    centered={false}
                    eyebrow="Featured institutions"
                    title="Top universities and colleges across Cambodia"
                    description="A quick look at institutions students commonly explore when comparing study options."
                />
                <Link
                    to="/universities"
                    className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 sm:flex"
                >
                    View all
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}