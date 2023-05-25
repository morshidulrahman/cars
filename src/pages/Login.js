import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../components/Provider/AuthProvider";
import SocailLogin from "./SocailLogin";

const Login = () => {
  const { signin } = useContext(Authcontext);

  // getting location whre i am staying
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlesubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const emailfrom = form.email.value;
    const password = form.password.value;

    signin(emailfrom, password).then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-row  ">
        <div className="text-center lg:text-left">
          <img src="/images/login/login.svg" alt="login" />
        </div>
        <form
          onSubmit={handlesubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="text-center font-bold my-1">Log in</label>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Log in </button>
            </div>
            <p>
              You don't have an account ?{" "}
              <Link to="/signup" className="font-semibold ">
                Sign up
              </Link>
            </p>
          </div>
        </form>
        <SocailLogin />
      </div>
    </div>
  );
};

export default Login;
