import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignIn = () => {
    const { loading, setLoading, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Welcome to Car Carriage');
        })
        .catch(err => {
            console.log(err);
            setError(err.message);
            toast.error('Something went wrong!');
            setLoading(false);

        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-1/4">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold register-title">Sign in here</h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name='email'
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
                  name='password'
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>
              <div className="login-toggle">
                <span className='text-black'>Don't have an account? <Link to='/signup' className='text-primary'>Sign up</Link></span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary capitalize">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;