import React from "react";

const Navber = () => {
  return (
    <div className="border-b-2 border-b-[#f2f2f2]">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 font-semibold text-[#101727]">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="cursor-pointer">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
          <a className="text-[#101727] font-semibold cursor-pointer">Login</a>
          <a className="btn bg-red-500 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
