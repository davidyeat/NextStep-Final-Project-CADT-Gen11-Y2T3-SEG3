import { FileText } from "lucide-react";
import formatTitle from "../../utils/formatTitle";

export default function UniversityAdmission({ university }) {
	{/* Admissions data include from association with university */}
	const admissions = university.Admissions[0];
	const admissionCriteria = university.Admissions[0].requirements;
	console.log(admissionCriteria);
	return (
		<section className="bg-white rounded-xl border border-[#E7E5E4] shadow-[0_18px_45px_rgba(15,23,42,0.06)] scroll-mt-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
			<div>
                {/* Header */}
                <div>
                    <h1 className="font-heading font-bold text-2xl sm:text-2xl md:text-3xl text-gray-900 mb-2">
                        Admission Requirements
                    </h1>
					<div className="border-b-2 border-[#007BFE] w-16 mb-4"></div>
				</div>

				{/* Main Content */}
				<div className="mt-4 max-w-screen bg-[#F5F5F4] px-4 py-3 rounded-xl lg:col-span-2">
					{/* Title */}
					<div className="flex items-center gap-4 mb-4">
						<span className="h-11 w-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-blue-600">
							<FileText className="w-5 h-5"/>
						</span>
						<span className="font-heading text-blue-600 text-lg sm:text-xl leading-snug font-semibold">
							{admissions.title}
						</span>
					</div>

					{/* Description */}
					<p className="font-body space-y-1.2 text-[16px] leading-7 text-gray-700 mt-4">
						{admissions.description}
					</p>

					{/* List of Requirements */}
					<div className="flex flex-col gap-4 mt-4">
						{Object.entries(admissionCriteria).map(([key, requirement], index) => (
							<div key={key}>
								{/* Title */}
								<h2 className="font-heading text-[#007BFE] font-semibold text-[16px] sm:text-lg mb-3">
									{index + 1}. {formatTitle(key)}
								</h2>

								{/* Requirement Description */}
								<p className="font-body text-[16px] leading-7 text-gray-700 mb-4">
									{requirement.description}
								</p>

								{/* Requirement Options with SVG Bullet Points */}
								<ul className="flex flex-col gap-3">
									{requirement.options.map((option, index) => (
										<li key={index} className="flex items-start gap-3">
											{/* Custom Red Arrow SVG matching your image */}
											<svg 
												className="w-5 h-5 mt-1 shrink-0" 
												viewBox="0 0 24 24" 
												fill="none"
											>
												<circle cx="12" cy="12" r="12" fill="#007BFE"/>
												<path 
													d="M10 7L15 12L10 17" 
													stroke="white" 
													strokeWidth="2.5" 
													strokeLinecap="round" 
													strokeLinejoin="round"
												/>
											</svg>
											<span className="font-body text-[16px] leading-7 text-gray-900">
												{option}
											</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
            </div>
		</section>
	);
}