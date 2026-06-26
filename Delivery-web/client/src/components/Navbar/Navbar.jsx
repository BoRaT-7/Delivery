import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiArrowUpRight } from "react-icons/fi";
export default function Navbar() {
    const navLinks = (
        <>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Coverage</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm rounded-2xl px-8 py-3 mt-4">
            <div className="navbar-start">

                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        ☰
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {navLinks}
                    </ul>
                </div>

                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-8"
                    />

                    <h2 className="font-bold text-2xl -ms-2.5">
                        ZapShift
                    </h2>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                <button className="btn hover:bg-[#b8d95a] btn-outline">
                    Sign In
                </button>

             <button className="btn bg-[#CAEB66] hover:bg-[#b8d95a] border-none rounded-md">
    Sign Up
    <FiArrowUpRight className="text-lg" />
</button>
            </div>
        </div>
    );
}