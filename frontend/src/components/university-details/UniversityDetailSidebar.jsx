const defaultTabs = [
    { label: "Overview", value: "overview" },
    { label: "Program", value: "program" },
    { label: "Admission", value: "admission" },
    { label: "Scholarships", value: "scholarships" },
    { label: "Facilities", value: "facilities" },
    { label: "Campus Life", value: "campus-life" },
    { label: "Location", value: "location" },
    { label: "Contact", value: "contact" },
];

export default function UniversityDetailSidebar({
    title,
    tabs = defaultTabs,
    activeTab,
    onTabChange = () => {},
}) {
    return (
        <aside className="lg:block lg:w-1/6 shrink-0">
            <div className="sticky top-18.75 rounded-2xl border border-[#E7E5E4] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <nav className="p-4">
                    <h3 className="mb-4 border-b border-[#E7E5E4] pb-2 text-lg font-bold text-gray-950">
                        {title}
                    </h3>
                    <ul id="sidebar-nav" className="space-y-2">
                        {tabs.map((tab) => {
                            const tabValue = tab.value ?? tab.id;
                            const isActive = tabValue === activeTab;

                            return (
                                <li key={tabValue}>
                                    <button
                                        type="button"
                                        onClick={() => onTabChange(tabValue)}
                                        className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors duration-200 ${
                                            isActive
                                                ? "bg-[#0F172A] text-white shadow-sm"
                                                : "bg-[#F5F5F4] text-gray-700 hover:bg-[#E7E5E4] hover:text-gray-950"
                                        }`}
                                        aria-current={isActive ? "page" : undefined}
                                        aria-pressed={isActive}
                                    >
                                        {tab.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}