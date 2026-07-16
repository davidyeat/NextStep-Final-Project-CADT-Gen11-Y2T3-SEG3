import { useEffect, useState } from "react";
import { Building2, GraduationCap, Heart, Loader2 } from "lucide-react";
import UniversityCard from "../components/UniversityCard";
import ScholarshipCard from "../components/ScholarshipCard";
import { getFavorites, removeFavorite } from "../services/favoriteService";

export default function FavoriteList() {
  const [favorites, setFavorites] = useState({ universities: [], scholarships: [] });
  const [activeTab, setActiveTab] = useState("universities");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setLoading(true);
        setFavorites(await getFavorites());
      } catch (requestError) {
        setError(requestError.response?.data?.message || "Unable to load your saved items.");
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const handleRemove = async (type, id) => {
    try {
      await removeFavorite(type, id);
      const collection = type === "university" ? "universities" : "scholarships";
      const idField = type === "university" ? "universityId" : "scholarshipId";
      setFavorites((current) => ({
        ...current,
        [collection]: current[collection].filter((item) => item[idField] !== id),
      }));
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to remove this saved item.");
    }
  };

  const items = favorites[activeTab];

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-slate-900">
      <section className="border-b border-[#E7E5E4] bg-linear-to-br from-white via-slate-50 to-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <p className="text-sm font-medium text-sky-600">Your collection</p>
          <h1 className="mt-2 font-['Space_Grotesk'] text-4xl font-semibold text-gray-950">Saved Items</h1>
          <p className="mt-2 text-sm text-gray-500">Your saved universities and scholarships</p>

          <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Saved item type">
            <TabButton active={activeTab === "universities"} count={favorites.universities.length} icon={<Building2 className="h-4 w-4" />} label="Universities" onClick={() => setActiveTab("universities")} />
            <TabButton active={activeTab === "scholarships"} count={favorites.scholarships.length} icon={<GraduationCap className="h-4 w-4" />} label="Scholarships" onClick={() => setActiveTab("scholarships")} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {loading ? (
          <div className="flex min-h-64 items-center justify-center rounded-3xl border border-dashed border-[#D6D3D1] bg-white text-sm text-gray-500"><Loader2 className="mr-3 h-5 w-5 animate-spin" /> Loading saved items...</div>
        ) : error ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">{error}</p>
        ) : items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#D6D3D1] bg-white px-6 py-16 text-center">
            <Heart className="mx-auto h-10 w-10 text-sky-500" />
            <h2 className="mt-4 text-xl font-semibold text-gray-950">No saved {activeTab} yet</h2>
            <p className="mt-2 text-sm text-gray-500">Use the heart button on a detail page to save an item here.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeTab === "universities"
              ? items.map((university) => <UniversityCard key={university.universityId} university={university} onRemoveFavorite={() => handleRemove("university", university.universityId)} />)
              : items.map((scholarship) => <ScholarshipCard key={scholarship.scholarshipId} image={scholarship.coverImage || "/default-scholarship.jpg"} logo={scholarship.Provider?.providerLogo || "/default-provider-logo.png"} title={scholarship.title} studyIn={scholarship.studyIn} type={scholarship.FundingType?.name || "N/A"} degree={scholarship.degreeLevel} deadline={scholarship.applicationDeadline} scholarshipId={scholarship.scholarshipId} onRemoveFavorite={() => handleRemove("scholarship", scholarship.scholarshipId)} />)}
          </div>
        )}
      </section>
    </main>
  );
}

function TabButton({ active, count, icon, label, onClick }) {
  return (
    <button type="button" role="tab" aria-selected={active} onClick={onClick} className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition ${active ? "border-sky-500 bg-sky-50 text-sky-700" : "border-gray-200 bg-white text-gray-500 hover:border-sky-200 hover:text-sky-700"}`}>
      {icon} {label} <span className={`rounded-md px-2 py-0.5 text-xs ${active ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-600"}`}>{count}</span>
    </button>
  );
}
