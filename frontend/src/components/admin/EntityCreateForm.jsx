import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";

export default function EntityCreateForm({
  title,
  description,
  fields,
  onSubmit,
  cancelTo,
  submitLabel,
}) {
  const navigate = useNavigate();
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map((field) => [field.name, field.defaultValue ?? ""])),
  );
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const updateValue = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSaving(true);

    try {
      await onSubmit(values);
      navigate(cancelTo);
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          "Unable to save this record. Please check the form and try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={title}
        description={description}
        action={
          <button
            type="button"
            onClick={() => navigate(cancelTo)}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>
        }
      />

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        {error ? (
          <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2">
          {fields.map((field) => {
            const isTextArea = field.type === "textarea" || field.type === "list";
            const commonProps = {
              id: field.name,
              name: field.name,
              value: values[field.name],
              required: field.required,
              placeholder: field.placeholder,
              onChange: (event) => updateValue(field.name, event.target.value),
              className:
                "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100",
            };

            return (
              <div key={field.name} className={isTextArea || field.fullWidth ? "md:col-span-2" : ""}>
                <label htmlFor={field.name} className="block text-sm font-medium text-slate-700">
                  {field.label}{field.required ? " *" : ""}
                </label>
                {field.hint ? <p className="mt-1 text-xs text-slate-500">{field.hint}</p> : null}
                <div className="mt-2">
                  {field.type === "select" ? (
                    <select {...commonProps}>
                      <option value="">Select {field.label.toLowerCase()}</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : isTextArea ? (
                    <textarea {...commonProps} rows={field.rows || 4} />
                  ) : (
                    <input {...commonProps} type={field.type || "text"} min={field.min} step={field.step} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-5">
          <button type="button" onClick={() => navigate(cancelTo)} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
            Cancel
          </button>
          <button type="submit" disabled={saving} className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60">
            {saving ? "Saving..." : submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
