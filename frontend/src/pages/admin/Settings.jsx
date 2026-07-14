import PageHeader from "../../components/admin/PageHeader";

export default function Settings() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Platform Settings"
        description="Adjust branding, language, and system preferences."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            General Preferences
          </h2>
          <div className="mt-4 space-y-4">
            {[
              ["Platform Name", "NextStep"],
              ["Theme", "Academic Blue"],
              ["Language", "English"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <span className="text-sm text-slate-600">{label}</span>
                <span className="text-sm font-medium text-slate-900">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Admin Profile
          </h2>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            Manage administrator contact details and account preferences here.
          </div>
        </div>
      </div>
    </div>
  );
}
