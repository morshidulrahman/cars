import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../components/Provider/AuthProvider";
import SocailLogin from "./SocailLogin";

const Signup = () => {
  const { createUser } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlesubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then((data) => {
      navigate(from, { replace: true });
      console.log(data);
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
              <label className="text-center font-bold my-1"> Sign up</label>
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
              <button className="btn btn-primary">sign up</button>
            </div>
            <p>
              Already have an account ?{" "}
              <Link to="/login" className="font-semibold ">
                Login
              </Link>
            </p>
          </div>
        </form>
        <SocailLogin />
      </div>
    </div>
  );
};

export default Signup;
