export default function DetailStat({ icon, value, label }) {
  const Icon = icon;

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <Icon />
        </div>
        <div>
          <p className="text-md font-bold text-gray-900">{label}</p>
          <p className="text-sm text-gray-600">{value}</p>
        </div>
      </div>
    </div>
  );
}
