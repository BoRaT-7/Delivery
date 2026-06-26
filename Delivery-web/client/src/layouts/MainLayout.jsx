import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout() {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />

            <Outlet />
        </div>
    );
}