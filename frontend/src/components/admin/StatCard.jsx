export default function StatCard({ icon: Icon, label, value, accent = "sky" }) {
    const accentClasses = {
        sky: "bg-sky-50 text-sky-600",
        emerald: "bg-emerald-50 text-emerald-600",
        blue: "bg-blue-50 text-blue-600",
    };

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div
                className={`inline-flex rounded-xl p-3 ${accentClasses[accent] || accentClasses.sky}`}
            >
                <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-sm text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
        </div>
    );
}
