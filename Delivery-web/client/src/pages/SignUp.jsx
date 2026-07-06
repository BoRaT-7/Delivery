import { Link } from "react-router-dom";
import authImage from"../assets/auth/authImage.png";
export default function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div>
                      <img
                    src={authImage}
                    alt="Authentication"
                    className="w-full max-w-md"
                />
            </div>
            <div className="card bg-base-100 w-full max-w-md shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-5">
                        Sign Up
                    </h2>

                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <button className="btn bg-[#CAEB66] w-full border-none">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center mt-4">
                        Already have an account?
                        <Link
                            to="/signin"
                            className="text-blue-500 ml-2"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}