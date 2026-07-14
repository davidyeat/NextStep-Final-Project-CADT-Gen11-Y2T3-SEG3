import PageHeader from "../../components/admin/PageHeader";
import { useNavigate } from "react-router-dom";

export default function Scholarships() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Scholarship Management"
        description="Manage scholarship opportunities and deadlines."
        action={
          <button
            type="button"
            onClick={() => navigate("/admin/scholarships/new")}
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            + Add Scholarship
          </button>
        }
      />

      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-semibold text-slate-900">
          Scholarship management view is ready.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          CRUD and table interactions will be added in the next step.
        </p>
      </div>
    </div>
  );
}
