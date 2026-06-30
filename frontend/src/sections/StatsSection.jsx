import { Building2, GraduationCap, BookOpen, Users } from 'lucide-react';
import StatCard from '../components/StatCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function StatsSection() {
    const stats = [
        { id: 1, label: 'Universities', value: '150+', icon: Building2 },
        { id: 2, label: 'Scholarships', value: '500+', icon: BookOpen },
        { id: 3, label: 'Students', value: '10k+', icon: Users },
        { id: 4, label: 'Graduates', value: '5k+', icon: GraduationCap },
    ];

    return (
        <section className="border-y border-gray-200 bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <SectionHeader
                    eyebrow="Platform snapshot"
                    title="A growing platform built for student discovery"
                    description="NextStep brings together the key numbers that matter when students are looking for educational opportunities."
                />
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {stats.map((stat) => (
                        <StatCard 
                            key={stat.id} 
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}