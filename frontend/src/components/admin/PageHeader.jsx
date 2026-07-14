export default function PageHeader({ title, description, action }) {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-end md:justify-between">
        <div>
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            {description ? (
            <p className="mt-2 text-sm text-slate-600">{description}</p>
            ) : null}
        </div>
        {action ? <div>{action}</div> : null}
        </div>
    );
}
