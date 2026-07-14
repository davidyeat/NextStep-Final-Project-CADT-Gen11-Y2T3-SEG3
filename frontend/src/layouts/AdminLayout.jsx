import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";

export default function AdminLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const pageTitle = location.pathname.replace("/admin", "") || "Dashboard";
  const title =
    pageTitle === ""
      ? "Dashboard"
      : pageTitle
          .replace(/\//g, " ")
          .replace(/^\s/, "")
          .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed((value) => !value)}
          isMobileOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
        />

        <div className="flex-1">
          <Navbar title={title} onMenuClick={() => setIsMobileOpen(true)} />
          <main className="p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
