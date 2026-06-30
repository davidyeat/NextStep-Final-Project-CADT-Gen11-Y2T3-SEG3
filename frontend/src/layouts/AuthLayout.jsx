import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] py-8 text-gray-900 sm:py-12">
      <Outlet />
    </div>
  );
}
