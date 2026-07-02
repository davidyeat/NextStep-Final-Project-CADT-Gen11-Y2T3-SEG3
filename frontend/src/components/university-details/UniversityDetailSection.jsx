export default function UniversityDetailSection({
    eyebrow,
    title,
    description,
    children,
    className = '',
}) {
    return (
        <section
            className={`scroll-mt-32 rounded shadow-soft border border-slate-100 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ${className}`.trim()}
        >
            {(eyebrow || title || description) && (
                <div className="mb-5 space-y-2">
                    {title && <h3 className="text-2xl font-semibold tracking-tight text-gray-950">{title}</h3>}
                    {description && (
                        <p className="max-w-3xl text-sm leading-7 text-gray-600">{description}</p>
                    )}
                </div>
            )}

            {children}
        </section>
    );
}