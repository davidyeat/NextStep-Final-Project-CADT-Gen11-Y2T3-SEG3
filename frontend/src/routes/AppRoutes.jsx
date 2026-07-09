import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import University from "../pages/University";
import Scholarship from "../pages/Scholarship";
import Major from "../pages/Major";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import UniversityDetails from "../pages/UniversityDetails";
import ScholarshipDetail from "../pages/ScholarshipDetail";
import Recommendation from "../pages/Recommendation";
import ProtectedRoute from "../components/ProtectedRoute";

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
                    <Route path="/majors" element={<Major />} />
                    <Route path="/recommendations" element={<ProtectedRoute><Recommendation /></ProtectedRoute>} />
                    <Route path="/about-us" element={<About />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
