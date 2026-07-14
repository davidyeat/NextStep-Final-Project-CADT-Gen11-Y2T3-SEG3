export default function StatusBadge({ status }) {
  const normalized = (status || "active").toString().toLowerCase();
  const styles = {
    active: "bg-emerald-50 text-emerald-700",
    inactive: "bg-amber-50 text-amber-700",
    pending: "bg-sky-50 text-sky-700",
    deleted: "bg-rose-50 text-rose-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${styles[normalized] || styles.active}`}
    >
      {normalized.charAt(0).toUpperCase() + normalized.slice(1)}
    </span>
  );
}
