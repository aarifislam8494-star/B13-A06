import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ carts }) => {
  return (
    <div className="sticky top-0 bg-white shadow z-50">
      <div className="navbar sm:w-11/12 md:h-10/12 lg:h-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-1 text-base font-semibold cursor-pointer"
            >
              <li className=" hover:text-[#ff5e5b]">Products</li>
              <li className=" hover:text-[#ff5e5b]">Features</li>
              <li className=" hover:text-[#ff5e5b]">Pricing</li>
              <li className=" hover:text-[#ff5e5b]">Testimonials</li>
              <li className=" hover:text-[#ff5e5b]">FAQ</li>
            </ul>
          </div>
          <a className="sm:text-3xl cursor-pointer bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent font-bold">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-3 text-base cursor-pointer">
            <li className=" hover:text-[#ff5e5b]">Products</li>
            <li className=" hover:text-[#ff5e5b]">Features</li>
            <li className=" hover:text-[#ff5e5b]">Pricing</li>
            <li className=" hover:text-[#ff5e5b]">Testimonials</li>
            <li className=" hover:text-[#ff5e5b]">FAQ</li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div className="mr-1">
            <div className="relative flex">
              <span className="text-2xl cursor-pointer ">
                <CiShoppingCart />
              </span>
              {carts.length > 0 && (
                <span className="absolute bottom-4 left-4 bg-[#d62828] px-1.5 rounded-full text-white text-[12px]">
                  {carts.length}
                </span>
              )}
            </div>
          </div>
          <span className="font-semibold cursor-pointer hidden md:flex">
            Login
          </span>
          <a className="font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-2 px-3 rounded-full text-white cursor-pointer hover:bg-linear-to-l hover:from-[#ff0054] hover:to-[#ff5400] hover:text-gray-200 mr-2 sm:mr-0 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
