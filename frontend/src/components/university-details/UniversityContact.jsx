import { Globe, Mail, Phone } from 'lucide-react';
import UniversityDetailSection from './UniversityDetailSection';
import UniversityDetailSplitLayout from './UniversityDetailSplitLayout';

const fieldValue = (value) => value || 'Not provided yet';

export default function UniversityContact({ university }) {
    return (
        <UniversityDetailSplitLayout>
                <UniversityDetailSection
                    eyebrow="Contact"
                    title="Contact the university"
                    description="These contact details are read from the university record in the database."
                >
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5">
                            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5C6]" />
                            <div>
                                <p className="text-sm font-medium text-gray-950">Phone</p>
                                <p className="mt-1 text-sm leading-6 text-gray-600">{fieldValue(university?.phoneNumber)}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5">
                            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5C6]" />
                            <div>
                                <p className="text-sm font-medium text-gray-950">Email</p>
                                <p className="mt-1 text-sm leading-6 text-gray-600">{fieldValue(university?.email)}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-2xl border border-[#E7E5E4] bg-[#FAFAF9] p-5">
                            <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5C6]" />
                            <div>
                                <p className="text-sm font-medium text-gray-950">Website</p>
                                {university?.websiteUrl ? (
                                    <a
                                        href={university.websiteUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-1 block text-sm leading-6 text-[#2563EB] hover:underline"
                                    >
                                        {university.websiteUrl}
                                    </a>
                                ) : (
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Not provided yet</p>
                                )}
                            </div>
                        </div>
                    </div>
                </UniversityDetailSection>
        </UniversityDetailSplitLayout>
    );
}