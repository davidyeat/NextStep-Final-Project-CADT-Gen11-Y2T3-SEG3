import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/admin/PageHeader";
import SearchBar from "../../components/admin/SearchBar";
import Loading from "../../components/admin/Loading";
import EmptyState from "../../components/admin/EmptyState";
import Pagination from "../../components/admin/Pagination";
import ConfirmDeleteModal from "../../components/admin/ConfirmDeleteModal";
import { getAdminUniversities, deleteUniversity } from "../../services/universityService";
import { Search } from "lucide-react";

export default function Universities() {
    const navigate = useNavigate();
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({
        total: 0,
        page: 1,
        limit: 9,
        totalPages: 1,
    });
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const loadUniversities = async (nextPage = page, nextSearch = search) => {
        try {
            setLoading(true);
            setError("");
            const response = await getAdminUniversities({
                page: nextPage,
                limit: 10,
                search: nextSearch,
            });
            setUniversities(response.universities || []);
            setPagination(
                response.pagination || { total: 0, page: 1, limit: 10, totalPages: 1 },
            );
        } catch (err) {
            console.error(err);
            setError("Unable to load universities right now.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUniversities(page, search);
    }, [page]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setPage(1);
        loadUniversities(1, search);
    };

    const handleDelete = async () => {
        if (!selectedUniversity) return;

        try {
        setDeleting(true);
        await deleteUniversity(selectedUniversity.universityId);
        setSelectedUniversity(null);
        loadUniversities(page, search);
        } catch (err) {
        setError("Unable to delete the university right now.");
        } finally {
        setDeleting(false);
        }
    };

    return (
        <div className="space-y-6">
        <PageHeader
            title="University Management"
            description="Manage universities, profiles, and status updates."
            action={
            <button
                type="button"
                onClick={() => navigate("/admin/universities/new")}
                className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
                + Add University
            </button>
            }
        />

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <form
                onSubmit={handleSearchSubmit}
                className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            >
            <div className="w-full md:max-w-md">
                <SearchBar placeholder="Search universities..." />
            </div>
            <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 shadow-sm">
                    <Search className="h-4 w-4" />
                    <input
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search by name"
                        //className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none"
                    />
                </label>
                <button
                    type="submit"
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                Search
                </button>
            </div>
            </form>
        </div>

        {loading ? (
            <Loading label="Loading universities..." />
        ) : error ? (
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
            </div>
        ) : universities.length === 0 ? (
            <EmptyState
                title="No universities found"
                description="Try a different search term or add a new university."
            />
        ) : (
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="px-4 py-3 font-semibold">University</th>
                            <th className="px-4 py-3 font-semibold">Province/City</th>
                            <th className="px-4 py-3 font-semibold">Type</th>
                            <th className="px-4 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {universities.map((university) => (
                            <tr
                                key={university.universityId}
                                className="border-t border-slate-200 hover:bg-slate-50"
                            >
                                <td className="px-4 py-3 font-medium text-slate-900">
                                    {university.campusName}
                                </td>
                                <td className="px-4 py-3 text-slate-600">
                                    {university.province || university.city  || "—"}
                                </td>
                                <td className="px-4 py-3 text-slate-600">
                                    {university.type || "—"}
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            className="rounded-full border cursor-pointer border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                                        >
                                            View
                                        </button>

                                        <button
                                            type="button"
                                            className="rounded-full border cursor-pointer border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedUniversity(university)}
                                            className="rounded-full border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-50"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                <div className="border-t border-slate-200 px-4 py-3">
                    <Pagination
                        page={pagination.page}
                        totalPages={pagination.totalPages}
                        onPageChange={setPage}
                    />
                </div>
            </div>
        )}

        <ConfirmDeleteModal
            open={Boolean(selectedUniversity)}
            title="Delete university"
            description={`Are you sure you want to delete ${selectedUniversity?.campusName || "this university"}?`}
            onCancel={() => setSelectedUniversity(null)}
            onConfirm={handleDelete}
            loading={deleting}
        />
        </div>
    );
}
