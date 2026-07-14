import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, BookOpen, BadgeDollarSign, Users } from "lucide-react";
import PageHeader from "../../components/admin/PageHeader";
import StatCard from "../../components/admin/StatCard";
import Loading from "../../components/admin/Loading";
import { getDashboardStats } from "../../services/dashboardService";

export default function Dashboard() {
    const navigate = useNavigate();
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadStats = async () => {
        try {
            setLoading(true);
            const data = await getDashboardStats();
            setStats([
            {
                icon: Building2,
                label: "Total Universities",
                value: data.universities,
                accent: "sky",
            },
            {
                icon: BadgeDollarSign,
                label: "Total Scholarships",
                value: data.scholarships,
                accent: "emerald",
            },
            {
                icon: BookOpen,
                label: "Total Majors",
                value: data.majors,
                accent: "blue",
            },
            {
                icon: Users,
                label: "Total Users",
                value: data.users,
                accent: "sky",
            },
            ]);
        } catch (err) {
            console.log("Fetched error: ", err);
            setError("Unable to load dashboard statistics.");
        } finally {
            setLoading(false);
        }
        };

        loadStats();
    }, []);

    return (
        <div className="space-y-3">
            <PageHeader
                title="Dashboard Overview"
                description="A quick view of the platform health and recent activity."
            />

            {loading ? (
                <Loading label="Loading dashboard..." />
            ) : error ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
                {error}
                </div>
            ) : 
            
            // Stats 
            (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))}
                </div>
            )}

            {/* Recent Activity */}
            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">
                                Recent Activity
                            </h2>
                            <p className="mt-1 text-sm text-slate-600">
                                Latest platform updates and records.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        {[
                        "New university added",
                        "Scholarship updated",
                        "User role changed",
                        "New major published",
                        ].map((item) => (
                        <div
                            key={item}
                            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                        >
                            <p className="text-sm font-medium text-slate-700">{item}</p>
                            <span className="text-xs text-slate-500">Just now</span>
                        </div>
                        ))}
                    </div>
                </div>
                
                {/* Quick Action */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Quick Actions
                    </h2>
                    <div className="mt-6 space-y-3">
                        {[
                        {
                            label: "Add University",
                            path: "/admin/universities/new",
                            color: "bg-sky-600 text-white hover:bg-sky-700",
                        },
                        {
                            label: "Add Scholarship",
                            path: "/admin/scholarships/new",
                            color: "bg-emerald-600 text-white hover:bg-emerald-700",
                        },
                        {
                            label: "Add Major",
                            path: "/admin/majors/new",
                            color: "bg-slate-900 text-white hover:bg-slate-800",
                        },
                        ].map((action) => (
                            <button
                                key={action.label}
                                type="button"
                                onClick={() => navigate(action.path)}
                                className={`flex w-full items-center cursor-pointer justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${action.color}`}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
