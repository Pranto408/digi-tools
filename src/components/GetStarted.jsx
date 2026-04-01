import React from "react";
import User from "/user.png";
import Package from "/package.png";
import Rocket from "/rocket.png";

const GetStarted = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="max-w-7xl mx-auto px-6 bg-[#f9fafc] py-10 mb-10 font-sans">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#101727] mb-4">
            Get Started In 3 Steps
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
            <div className="absolute top-6 right-6 bg-[#6322FF] text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-sm shadow-md">
              01
            </div>

            <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <img src={User} alt="" className="w-12 h-12" />
            </div>

            <h3 className="text-[#101727] font-bold text-2xl mb-4">
              Create Account
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
            <div className="absolute top-6 right-6 bg-[#6322FF] text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-sm shadow-md">
              02
            </div>

            <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <img src={Package} alt="" className="w-12 h-12" />
            </div>

            <h3 className="text-[#101727] font-bold text-2xl mb-4">
              Choose Products
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
            <div className="absolute top-6 right-6 bg-[#6322FF] text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-sm shadow-md">
              03
            </div>

            <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <img src={Rocket} alt="" className="w-12 h-12" />
            </div>

            <h3 className="text-[#101727] font-bold text-2xl mb-4">
              Start Creating
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
