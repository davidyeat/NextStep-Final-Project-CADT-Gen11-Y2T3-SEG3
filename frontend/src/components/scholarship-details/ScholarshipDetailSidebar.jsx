export default function ScholarshipDetailSidebar({ icon, title, items }) {
    return (
        <div className="p-6 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
                <span className="h-11 w-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-blue-600">
                    {icon}
                </span>
                <span className="text-blue-600 text-lg sm:text-xl leading-snug font-semibold">
                    {title}
                </span>
            </div>
            <ul className="space-y-1.5 pl-5 text-[16px] leading-relaxed text-gray-700">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2.5"></div>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
