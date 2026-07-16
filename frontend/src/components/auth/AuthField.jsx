export default function AuthField({ label, type = "text", name, value, onChange, placeholder, autoComplete, minLength }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        minLength={minLength}
        required
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-sky-300 focus:outline-none"
      />
    </label>
  );
}
