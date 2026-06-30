export default function AuthFeatureList({ items }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
        >
          <p className="text-sm font-semibold text-gray-900">{item.title}</p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
