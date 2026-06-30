import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {

    // Later these values will come from AuthContext
    const isAuthenticated = false;

    const user = {
        username: "David Yeat",
        email: "david@gmail.com",
        profileImage: "",
    };

    const handleLogout = () => {
        console.log("Logout");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar 
            user={user}
            isAuthenticated={isAuthenticated}
            onLogout={handleLogout}
        />

        <main className="flex-1">
            <Outlet />
        </main>

        <Footer />
        </div>
    );
}