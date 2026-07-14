import PageHeader from "../../components/admin/PageHeader";

export default function Users() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="User Management"
        description="Review platform users, roles, and access levels."
        action={
          <button
            type="button"
            className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            + Invite User
          </button>
        }
      />

      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-semibold text-slate-900">
          User management view is ready.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Role and activation controls will be added in the next iteration.
        </p>
      </div>
    </div>
  );
}
