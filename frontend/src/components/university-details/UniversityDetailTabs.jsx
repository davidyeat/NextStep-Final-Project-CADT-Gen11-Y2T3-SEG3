export default function UniversityDetailTabs({
  tabs = [],
  activeTab,
  onTabChange = () => {},
}) {
  return (
    <nav className="mb-6 border-b border-slate-200">
      <div className="flex gap-8 overflow-x-auto text-sm font-medium lg:px-10 bg-back">
        {tabs.map((tab) => {
          const tabValue = tab.value ?? tab.id;
          const isActive = tabValue === activeTab;

          return (
            <button
              key={tabValue}
              type="button"
              onClick={() => onTabChange(tabValue)}
              className={`pb-3 p-3 font-bold text-sm tracking-wide uppercase whitespace-nowrap ${
                isActive
                  ? "text-[#2563EB] border-b-[3px] border-[#2563EB]"
                  : "text-slate-600 cursor-pointer hover:text-[#2563EB]"
              }`}
              aria-pressed={isActive}
              aria-current={isActive ? "page" : undefined}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
