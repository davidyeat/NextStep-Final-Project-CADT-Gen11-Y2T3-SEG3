export default function AboutCard({
  icon,
  title,
  description,
  color,
  bg,
  children,
}) {
  const Icon = icon;

  return (
    <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: bg, color }}
      >
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      {description && (
        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      )}

      {children}
    </article>
  );
}
