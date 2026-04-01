import React from "react";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 font-sans">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#101727] mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div className="flex flex-col bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="grow">
            <h3 className="text-2xl font-bold text-[#101727]">Starter</h3>
            <p className="text-gray-400 mt-2">Perfect for getting started</p>
            <div className="my-8">
              <span className="text-5xl font-bold text-[#101727]">$0</span>
              <span className="text-gray-400">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 text-gray-600">
              <li className="flex items-center gap-2">
                ✓ Access to 10 free tools
              </li>
              <li className="flex items-center gap-2">✓ Basic templates</li>
              <li className="flex items-center gap-2">✓ Community support</li>
              <li className="flex items-center gap-2">✓ 1 project per month</li>
            </ul>
          </div>
          <button className="btn w-full bg-[#7C2DFF] hover:bg-[#6A25D9] border-none text-white rounded-full h-12 capitalize font-bold">
            Get Started Free
          </button>
        </div>

        <div className="relative flex flex-col bg-[#7C2DFF] p-8 rounded-3xl shadow-xl text-white">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-md">
            Most Popular
          </div>

          <div className="grow">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-purple-100 mt-2">Best for professionals</p>
            <div className="my-8">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-purple-100">/Month</span>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-2">
                ✓ Access to all premium tools
              </li>
              <li className="flex items-center gap-2">✓ Unlimited templates</li>
              <li className="flex items-center gap-2">✓ Priority support</li>
              <li className="flex items-center gap-2">✓ Unlimited projects</li>
              <li className="flex items-center gap-2">✓ Cloud sync</li>
              <li className="flex items-center gap-2">✓ Advanced analytics</li>
            </ul>
          </div>
          <button className="btn w-full bg-white hover:bg-gray-100 border-none text-[#7C2DFF] rounded-full h-12 capitalize font-bold">
            Start Pro Trial
          </button>
        </div>

        <div className="flex flex-col bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="grow">
            <h3 className="text-2xl font-bold text-[#101727]">Enterprise</h3>
            <p className="text-gray-400 mt-2">For teams and businesses</p>
            <div className="my-8">
              <span className="text-5xl font-bold text-[#101727]">$99</span>
              <span className="text-gray-400">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 text-gray-600">
              <li className="flex items-center gap-2">✓ Everything in Pro</li>
              <li className="flex items-center gap-2">✓ Team collaboration</li>
              <li className="flex items-center gap-2">✓ Custom integrations</li>
              <li className="flex items-center gap-2">✓ Dedicated support</li>
              <li className="flex items-center gap-2">✓ SLA guarantee</li>
              <li className="flex items-center gap-2">✓ Custom branding</li>
            </ul>
          </div>
          <button className="btn w-full bg-[#7C2DFF] hover:bg-[#6A25D9] border-none text-white rounded-full h-12 capitalize font-bold">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
