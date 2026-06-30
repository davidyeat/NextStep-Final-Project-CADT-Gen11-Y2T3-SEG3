export default function StatCard({ icon, value, label }) {
  const Icon = icon;

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <Icon />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-950">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
}
