export default function UniversityDetailSplitLayout({
    children,
    aside,
    className = '',
}) {
    return (
        <section
            className={`grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_360px] ${className}`.trim()}
        >
            <div className="space-y-6">{children}</div>

            {aside ? <aside className="space-y-6">{aside}</aside> : null}
        </section>
    );
}