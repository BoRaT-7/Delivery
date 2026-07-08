import authImage from "../assets/auth/authImage.png";

export default function ForgotPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-5">
            {/* Left Image */}
            <div className="hidden lg:block mr-10">
                <img
                    src={authImage}
                    alt="Forgot Password"
                    className="w-full max-w-md"
                />
            </div>

            {/* Card */}
            <div className="card bg-base-100 w-full max-w-md shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center">
                        Forgot Password
                    </h2>

                    <p className="text-center text-gray-500 mb-4">
                        Enter your email address and we'll send you a password
                        reset link.
                    </p>

                    <form className="space-y-5">
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

                        <button className="btn bg-[#CAEB66] border-none w-full">
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}