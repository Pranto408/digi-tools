import React from "react";

const Explore = () => {
  return (
    <div className="bg-linear-to-r from-[#6322FF] via-[#7B2CFF] to-[#9B1DFA]">
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="py-20 px-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="btn bg-white hover:bg-gray-100 text-[#7C2DFF] border-none rounded-full px-10 h-14 text-lg font-bold capitalize">
              Explore Products
            </button>

            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#7C2DFF] rounded-full px-10 h-14 text-lg font-bold capitalize">
              View Pricing
            </button>
          </div>

          <p className="text-purple-200 text-sm font-medium opacity-80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
