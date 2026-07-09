import formatDate from "../../utils/formatDate";

export default function InfoStat({ icon, label, value }) {
    const formattedValue = label === "Deadline" ? formatDate(value) : value || "N/A";

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    {icon}
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    <p className="mt-1 text-medium font-medium text-gray-900">{formattedValue}</p>
                </div>
            </div>
        </div>
    );
}