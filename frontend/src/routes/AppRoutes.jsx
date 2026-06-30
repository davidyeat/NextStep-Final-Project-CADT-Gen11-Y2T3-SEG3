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

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/universities" element={<University />} />
                    <Route path="/scholarships" element={<Scholarship />} />
                    <Route path="/majors" element={<Major />} />
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
