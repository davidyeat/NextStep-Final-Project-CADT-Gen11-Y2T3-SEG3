import { BriefcaseBusiness } from "lucide-react";

const careerFieldOptions = [
  "Technology", "Healthcare", "Engineering", "Education", "Business", "Design", "Research", "Public service",
];

const workEnvironmentOptions = [
  "Office", "Laboratory", "Hospital", "Workshop", "Remote", "Fieldwork", "Startup", "Research institution",
];

export default function StepThreeCareerForm({
  careerField,
  careerValues,
  workEnvironment,
  locationPreference,
  additionalPreferences,
  onCareerFieldChange,
  onCareerValuesChange,
  onWorkEnvironmentChange,
  onLocationPreferenceChange,
  onAdditionalPreferencesChange,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600"><BriefcaseBusiness className="h-5 w-5" /></div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Future career preferences</h2>
          <p className="text-sm text-slate-600">These details help the recommendation engine understand the kind of work you want to do in the future.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Career field of interest
            <select value={careerField} onChange={(event) => onCareerFieldChange(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500">
              <option value="">Select a field</option>
              {careerFieldOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-700">
            What do you value most in a future career?
            <textarea value={careerValues} onChange={(event) => onCareerValuesChange(event.target.value)} rows="4" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500" placeholder="For example: stability, purpose, flexibility, income, growth, impact..." />
          </label>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Preferred work environment
            <select value={workEnvironment} onChange={(event) => onWorkEnvironmentChange(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500">
              <option value="">Select an environment</option>
              {workEnvironmentOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Preferred location
            <input value={locationPreference} onChange={(event) => onLocationPreferenceChange(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500" placeholder="Local, regional, international..." />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Additional preferences
            <textarea value={additionalPreferences} onChange={(event) => onAdditionalPreferencesChange(event.target.value)} rows="4" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500" placeholder="Add anything that would improve the recommendation quality." />
          </label>
        </div>
      </div>
    </div>
  );
}
