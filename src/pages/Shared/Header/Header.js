import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, loader, logOut } = useContext(AuthContext);
  console.log(user, loader);

  const handleSignOut = () => {
    logOut()
    .then( () => {

    })
    .catch(err => {
      console.log(err);
    })
  }
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/items">Advertise items</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <button onClick={handleSignOut}><Link>Sign out</Link></button>
          </li>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={user.photoURL} alt="user_photo" />
            </div>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to="signin">Sign in</Link>
          </li>
        </>
      )}
    </>
  );
  
  return (
    <>
      <div className="navbar container mx-auto justify-between">
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
              {menuItems}
            </ul>
          </div>
          <span className="header__logo">Car Carriage</span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Header;
