import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3">
        <div>
          <Link to="/">
            <img className="w-[170px]" src={logo} alt="" />
          </Link>
        </div>
        <div className=" flex gap-3">
          <Link
            to="/login"
            className="p-2 bg-bg border border-h1 rounded-md font-pop text-h1 "
          >
            Login
          </Link>
          <Link
            to="/register"
            className="p-2 bg-buttonbg rounded-md font-pop text-bg "
          >
            sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <Link to="/">Home</Link>
<Link to="/register">Sign up</Link>
<Link to="/login">Login </Link> */
}
