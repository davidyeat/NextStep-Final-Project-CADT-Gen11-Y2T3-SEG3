import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Sparkles } from "lucide-react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-6 py-16">
        <div className="rounded-3xl border border-sky-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <Sparkles className="h-7 w-7 animate-pulse" />
          </div>
          <p className="text-lg font-semibold text-slate-900">Preparing your recommendation space</p>
          <p className="mt-2 text-sm text-slate-600">Checking your session before we continue.</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-16">
        <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Authentication required</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Login to unlock recommendation support</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Your major recommendation experience is personalized, so we need an active account before we can begin.
          </p>
          <Link
            to="/login"
            state={{ from: location }}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Go to login
          </Link>
        </div>
      </div>
    );
  }

  return children;
}
