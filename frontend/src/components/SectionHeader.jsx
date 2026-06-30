export default function SectionHeader({ eyebrow, title, description, centered = true }) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mx-auto max-w-3xl`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
