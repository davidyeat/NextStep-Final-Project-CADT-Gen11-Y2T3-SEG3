export default function RenderList({ icon, title, items }) {
    return (
        <div className="mt-6">
            <div className="flex items-center gap-4 mb-4">
                <span className="h-11 w-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-blue-600">
                    {icon}
                </span>
                <span className="font-heading text-[#007BFE] text-lg sm:text-xl leading-snug font-bold">
                    {title}
                </span>
            </div>
            <ul className="font-body space-y-1.2 pl-8 text-[16px] leading-7 text-gray-700 list-disc">
                {items.map((item, index) => (
                    <li key={index} className="mt-3">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}