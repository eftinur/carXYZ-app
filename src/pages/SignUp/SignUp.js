import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./SignUp.css";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { loading, setLoading, createUser, updateUserInfo } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const accountType = form.account.value;

    console.log(name, image, email, password, accountType);

    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);

    // storing images on cloud
    const imageHostKey = process.env.REACT_APP_imageHostKey;
    console.log(imageHostKey);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);

        createUser(email, password)
          .then((result) => {
            const user = result.user;
            saveUseInDB(name, email, accountType);
            console.log(user);
            updateUserInfo(name, imageData.data.display_url)
              .then(() => {})
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
        setError(err.message);
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
      getUserToken(email);
      navigate(from, {replace: true})
    })
  }

  const getUserToken = (email) => {
    fetch(`http://localhost:5000/token?email=${email}`)
    .then(res => res.json())
    .then(data => {
      if(data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, {replace: true});
      }
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col  sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-1/4">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold register-title">register here</h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="input input-bordered pt-2"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Acoount Type:</span>
              </label>
              <select name="account" className="select select-bordered w-full">
                <option>Seller</option>
                <option selected>Buyer</option>
              </select>
            </div>
            <div className="login-toggle">
              <span className="text-black">
                Already have an account?{" "}
                <Link to="/signin" className="text-primary">
                  Sign in
                </Link>
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary capitalize">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
