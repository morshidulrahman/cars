import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navitems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 my-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navitems}
          </ul>
        </div>
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="w-36 h-14" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navitems}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <button className="border border-[#FF3811] px-4 py-3 rounded-md text-[#FF3811] font-semibold">
          Appoinment
        </button>
      </div>
    </div>
  );
};

export default Header;
