import React, { use, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

const Tools = ({ toolsPromise,carts,setCarts }) => {
  const tools = use(toolsPromise);
  const [active, setActive] = useState("Products")
  



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

      <div className="flex justify-center">
        <div className="tabs tabs-box justify-center bg-transparent border-2 rounded-full border-[#f6f6f6] my-8 space-x-2">
          {/* Products Tab */}
          <input
            onClick={() => setActive("Products")}
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-30 font-semibold transition-all ${
              active === "Products"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "bg-transparent text-gray-600"
            }`}
            aria-label="Products"
            defaultChecked
          />

          {/* Cart Tab */}
          <input
            onClick={() => setActive("Cart")}
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-30 font-semibold transition-all ${
              active === "Cart"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "bg-transparent text-gray-600"
            }`}
            aria-label="Cart"
          />
        </div>
      </div>

      {active === "Products" && (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {tools.map((tool) => (
            <Card
              key={tool.id}
              tool={tool}
              carts={carts}
              setCarts={setCarts}
            ></Card>
          ))}
        </div>
      )}

      {active === "Cart" && (
        <div className="w-10/12 p-4 mx-auto gap-8 mt-10 border-2 border-slate-200 rounded-2xl">
          <Cart carts={carts} setCarts={setCarts}></Cart>
        </div>
      )}
    </div>
  );
};

export default Tools;
