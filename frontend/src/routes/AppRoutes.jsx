import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import University from "../pages/University";
import Scholarship from "../pages/Scholarship";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import UniversityDetails from "../pages/UniversityDetails";
import ScholarshipDetail from "../pages/ScholarshipDetail";
import Recommendation from "../pages/Recommendation";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/admin/Dashboard";
import Universities from "../pages/admin/Universities";
import Scholarships from "../pages/admin/Scholarships";
import Majors from "../pages/admin/Majors";
import Users from "../pages/admin/Users";
import Settings from "../pages/admin/Settings";
import CreateUniversity from "../pages/admin/CreateUniversity";
import CreateScholarship from "../pages/admin/CreateScholarship";
import CreateMajor from "../pages/admin/CreateMajor";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/universities" element={<University />} />
                    <Route path="/universities/:universityId/full" element={<UniversityDetails />} />
                    <Route path="/scholarships" element={<Scholarship />} />
                    <Route path="/scholarships/:scholarshipId/full" element={<ScholarshipDetail />} />
                    <Route path="/recommendations" element={<ProtectedRoute><Recommendation /></ProtectedRoute>} />
                    <Route path="/about-us" element={<About />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Route>

                <Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/admin/universities" element={<Universities />} />
                    <Route path="/admin/universities/new" element={<CreateUniversity />} />
                    <Route path="/admin/scholarships" element={<Scholarships />} />
                    <Route path="/admin/scholarships/new" element={<CreateScholarship />} />
                    <Route path="/admin/majors" element={<Majors />} />
                    <Route path="/admin/majors/new" element={<CreateMajor />} />
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin/settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
