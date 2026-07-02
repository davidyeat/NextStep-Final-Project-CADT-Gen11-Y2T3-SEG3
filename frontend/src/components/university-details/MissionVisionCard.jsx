export default function MissionVisionCard({ icon, title, items }) {
    const Icon = icon;

    return (
        <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-950">{title}</h3>
            </div>
            <ul className="space-y-3 pl-5 text-sm leading-7 text-gray-600 list-disc">
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}