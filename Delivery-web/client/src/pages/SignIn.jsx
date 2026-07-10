import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authImage from "../assets/auth/authImage.png";
import useAuth from "../hooks/useAuth";

export default function SignIn() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const authContextValue = useAuth();
console.log("AUTH CONTEXT:", authContextValue);
const { signInUser, googleSignIn } = authContextValue;

    const onSubmit = (data) => {
        signInUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-5 py-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* Left Image */}
                <div className="hidden lg:block">
                    <img
                        src={authImage}
                        alt="Authentication"
                        className="w-full max-w-md"
                    />
                </div>

                {/* Sign In Card */}
                <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-2xl">
                    <div className="card-body">

                        <h2 className="text-3xl font-bold text-center text-gray-800">
                            Welcome Back 👋
                        </h2>

                        <p className="text-center text-gray-500 mb-4">
                            Sign in to continue
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >

                            {/* Email */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Email Address
                                    </span>
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full focus:outline-none focus:border-[#CAEB66]"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value:
                                                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message:
                                                "Please enter a valid email",
                                        },
                                    })}
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Password
                                    </span>
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full focus:outline-none focus:border-[#CAEB66]"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password must be at least 6 characters",
                                        },
                                    })}
                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}

                                <div className="text-right mt-2">
                                    <Link
                                        to="/forgot-password"
                                        className="text-sm text-[#7BA400] hover:underline"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                className="btn w-full bg-[#CAEB66] hover:bg-[#b8d95a] border-none text-black font-semibold rounded-lg"
                            >
                                Sign In
                            </button>
                        </form>

                        <div className="divider text-gray-400">
                            OR
                        </div>

                        {/* Google Sign In Button */}
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline w-full flex items-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                className="w-5 h-5"
                            >
                                <path
                                    fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                                    s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                                    s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
                                    l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                />
                                <path
                                    fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                                    c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                                    c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24
                                    C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        <p className="text-center text-gray-600 mt-4">
                            Don't have an account?
                            <Link
                                to="/signup"
                                className="ml-2 font-semibold text-[#7BA400] hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
}