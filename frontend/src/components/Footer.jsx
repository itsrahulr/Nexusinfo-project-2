import React from "react";
import logo2 from "/images/logo-white.png";

const Footer = () => {
  return (
    <>
      <div className="bg-h1 mt-10  ">
        <div className="md:w-1/2 w-full ">
          <img className="w-40 p-3" src={logo2} alt="" />
        </div>
        <div className="">
          <ul className="text-bg font-pop text-xl flex flex-col p-3  justify-end gap-3 mt-5">
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Youtube</a>
            </li>
            <li>
              <a href="">X</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
