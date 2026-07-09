export default function RenderList({ icon, title, items }) {
    return (
        <div className="mt-6">
            <div className="flex items-center gap-4 mb-4">
                <span className="h-11 w-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-blue-600">
                    {icon}
                </span>
                <span className="text-blue-600 text-lg sm:text-xl leading-snug font-semibold">
                    {title}
                </span>
            </div>
            <ul className="space-y-1.2 pl-5 text-[16px] leading-7 text-gray-700 list-disc">
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}