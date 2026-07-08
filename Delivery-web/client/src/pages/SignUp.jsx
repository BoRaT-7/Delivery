import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import authImage from "../assets/auth/authImage.png";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        // TODO: Firebase Create User Here

        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-5">
            {/* Left Image */}
            <div className="hidden lg:block mr-10">
                <img
                    src={authImage}
                    alt="Authentication"
                    className="w-full max-w-md"
                />
            </div>

            {/* Signup Card */}
            <div className="card bg-base-100 w-full max-w-md shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-5">
                        Sign Up
                    </h2>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Name */}
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Full Name
                                </span>
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Name must be at least 3 characters",
                                    },
                                })}
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Email
                                </span>
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
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
                                <span className="label-text">
                                    Password
                                </span>
                            </label>

                            <input
                                type="password"
                                placeholder="Enter password"
                                className="input input-bordered w-full"
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
                        </div>

                        <button
                            type="submit"
                            className="btn bg-[#CAEB66] w-full border-none"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center mt-4">
                        Already have an account?
                        <Link
                            to="/signin"
                            className="text-blue-500 ml-2 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}