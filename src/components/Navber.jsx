import React from "react";

const Navber = ({carts}) => {
  return (
    <div className="border-b-2 border-b-[#f2f2f2]">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-black text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 mr-4 font-semibold text-[#101727]">
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
            <div className="indicator">
              {carts.length > 0 && (
                <span className="h-5 rounded-full indicator-item badge badge-xs bg-red-500 text-white">
                  {carts.length}
                </span>
              )}
              <i className="fa-solid fa-cart-shopping mr-1 mt-0.5"></i>
            </div>
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
