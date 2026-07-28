import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authImage from "../assets/auth/authImage.png";
import useAuth from "../hooks/useAuth";

export default function SignUp() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { registerUser, googleSignIn } = useAuth();

   const onSubmit = (data) => {
    const image = data.image?.[0];

    if (!image) {
        console.log("No image selected");
        return;
    }

    console.log("Selected Image:", image);
    console.log("Name:", image.name);
    console.log("Size:", image.size);
    console.log("Type:", image.type);

    registerUser(data.email, data.password)
        .then((result) => {
            console.log(result.user);

            // Later upload image here
            // console.log(image);

            reset();
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
                         encType="multipart/form-data"
                    >
                      {/* Profile Image */}
<div>
    <label className="label">
        <span className="label-text">
            Profile Image
        </span>
    </label>

    <input
        type="file"
        accept="image/*"
        className="file-input file-input-bordered w-full"
        {...register("image", {
            required: "Profile image is required",
        })}
    />

    {errors.image && (
        <p className="text-red-500 text-sm mt-1">
            {errors.image.message}
        </p>
    )}
</div>  
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

                    {/* Divider */}
                    <div className="divider">OR</div>

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