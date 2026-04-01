import React from 'react';

const Rating = () => {
    return (
      <div className="bg-linear-to-r from-[#6322FF] via-[#7B2CFF] to-[#9B1DFA] mt-15 py-12 px-6 ">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around text-white">

          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
            <p className="text-purple-100 text-sm md:text-base font-medium opacity-90">
              Active Users
            </p>
          </div>


          <div className="hidden md:block h-16 w-px bg-white/30"></div>

          <div className="text-center flex-1 my-8 md:my-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
            <p className="text-purple-100 text-sm md:text-base font-medium opacity-90">
              Premium Tools
            </p>
          </div>


          <div className="hidden md:block h-16 w-px bg-white/30"></div>

          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
            <p className="text-purple-100 text-sm md:text-base font-medium opacity-90">
              Rating
            </p>
          </div>
        </div>
      </div>
    );
};

export default Rating;