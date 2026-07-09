import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("User logged out");
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    const navLinks = (
        <>
            <li>
                <Link to="/">Services</Link>
            </li>
            <li>
                <Link to="/coverage">Coverage</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/">Pricing</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm rounded-2xl px-8 py-3 mt-4">

            {/* Navbar Start */}
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
                        alt="Logo"
                        className="w-8"
                    />

                    <h2 className="font-bold text-2xl">
                        ZapShift
                    </h2>
                </Link>

            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-3">

                {user ? (
                    <>
                        <span className="hidden md:block font-medium">
                            {user.email}
                        </span>

                        <button
  onClick={handleLogout}
  className="btn bg-[#b8d95a] hover:bg-[#a8c94f] text-black border-none"
>
  Logout
</button>
                    </>
                ) : (
                    <>
                        <Link to="/signin">
                            <button className="btn btn-outline hover:bg-[#b8d95a]">
                                Sign In
                            </button>
                        </Link>

                        <Link to="/signup">
                            <button className="btn bg-[#CAEB66] hover:bg-[#b8d95a] border-none rounded-md">
                                Sign Up
                                <FiArrowUpRight className="text-lg" />
                            </button>
                        </Link>
                    </>
                )}
            </div>

        </div>
    );
}