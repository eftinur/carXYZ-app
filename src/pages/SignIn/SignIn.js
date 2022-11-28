import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const { loading, setLoading, signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true})
        toast.success("Welcome to Car Carriage");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    const accountType = "buyer";
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true})
        saveUseInDB(user?.displayName, user?.email, accountType)
        toast.success("Welcome to Car Carriage");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };

  const saveUseInDB = (name, email, accountType) => {
    const user = { name, email, accountType };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('inside saveUserInDB', data);
      navigate(from, {replace: true})
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-1/4">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold register-title">Sign in here</h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
              />
            </div>
            <div className="login-toggle">
              <span className="text-black">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary">
                  Sign up
                </Link>
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary capitalize">Sign in</button>
            </div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-primary capitalize mx-8 mb-4"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
