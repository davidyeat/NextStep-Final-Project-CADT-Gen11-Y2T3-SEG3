import PageHeader from "../../components/admin/PageHeader";
import { useNavigate } from "react-router-dom";

export default function Majors() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Major Management"
        description="Organize majors, departments, and academic programs."
        action={
          <button
            type="button"
            onClick={() => navigate("/admin/majors/new")}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            + Add Major
          </button>
        }
      />

      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-semibold text-slate-900">
          Major management view is ready.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          This section will be expanded with full table controls next.
        </p>
      </div>
    </div>
  );
}
