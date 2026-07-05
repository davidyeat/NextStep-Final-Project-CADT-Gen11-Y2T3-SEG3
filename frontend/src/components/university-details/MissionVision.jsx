export default function MissionVision({ title, items }) {
    return (
        <div className="mt-4">
            <h1 className="text-2xl font-serif font-black text-gray-900 mt-8 mb-4">
                {title}
            </h1>
            <ul className="space-y-1.2 pl-5 text-[16px] leading-7 text-gray-900 list-disc">
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}