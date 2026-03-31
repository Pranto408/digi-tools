import React, { use } from "react";

const tagColors = {
  "Best Seller": "bg-orange-100 text-orange-700",
  Popular: "bg-indigo-100 text-indigo-600",
  New: "bg-emerald-100 text-emerald-700",
};

const Tools = ({ toolsPromise }) => {
  const tools = use(toolsPromise);


  return (
    <div className="py-20">
      <div className="text-center space-y-4">
        <h2 className="text-[#101727] text-5xl font-extrabold">
          Premium Digital Tools
        </h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {tools.map((tool) => (
          <div key={tool.id}>
            <div className="card h-full w-full max-w-sm bg-white shadow-lg border border-slate-100 mx-auto">
              <div className="card-body p-8 gap-4 relative">
                <span
                  className={`badge absolute top-6 right-6 font-bold py-4 px-5 text-xs border-none rounded-full ${
                    tagColors[tool.tag] || "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tool.tag}
                </span>

                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 mb-2">
                  <span className="text-3xl">
                    <img className="w-10 h-10" src={tool.icon} alt="" />
                  </span>
                </div>

                <h2 className="card-title text-2xl font-bold text-slate-900">
                  {tool.name}
                </h2>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold text-slate-900">
                    ${tool.price}
                  </span>
                  <span className="text-slate-500 text-xl">/{tool.period}</span>
                </div>

                <ul className="space-y-1 my-1">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <i className="text-green-500 fa-solid fa-check"></i>
                      <span className="text-slate-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="card-actions mt-2">
                  <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white hover:from-[#9514FA] hover:to-[#4F39F6] rounded-full text-lg h-11">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
