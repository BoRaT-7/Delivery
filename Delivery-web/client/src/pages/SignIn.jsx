import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import authImage from "../assets/auth/authImage.png";

export default function SignIn() {

  const { signInUser } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();

  const onSubmit = (data)=>{
      signInUser(data.email,data.password)
      .then(result=>{
          console.log(result.user);
          navigate("/");
      })
      .catch(error=>{
          console.log(error.message);
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">

      <div className="hidden lg:block mr-10">
        <img
          src={authImage}
          className="max-w-md"
        />
      </div>

      <div className="card w-full max-w-md bg-base-100 shadow-xl">

        <div className="card-body">

          <h2 className="text-3xl font-bold text-center">
            Sign In
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <input
            className="input input-bordered w-full mt-4"
            placeholder="Email"
            {...register("email",{required:true})}
            />

            {errors.email && <p>Email Required</p>}

            <input
            type="password"
            className="input input-bordered w-full mt-4"
            placeholder="Password"
            {...register("password",{required:true})}
            />

            {errors.password && <p>Password Required</p>}

            <button className="btn btn-primary w-full mt-5">
              Login
            </button>

          </form>

          <p className="text-center mt-5">

            Don't have an account?

            <Link
            className="text-blue-500 ml-2"
            to="/signup">
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}