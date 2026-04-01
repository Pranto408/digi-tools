import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts
        .reduce((sum, item) => sum + item.price, 0)
        .toFixed(2);
    const handlePayment = () => {
        setCarts([])
        toast.success("Payment successful!")
    }
    const handleRemove = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.error("Item deleted!")
    }

    return (
      <div>
        <h1 className="text-[#101727] font-bold text-2xl mb-6">Your Cart</h1>
        {carts.length === 0 ? (
          <p className='text-2xl font-bold text-slate-400 mb-8 text-center'>Cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 w-full">
              {carts.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full items-center justify-between p-4 bg-[#F8F9FC] rounded-2xl border border-transparent hover:border-gray-100 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm flex items-center justify-center w-14 h-14">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#101727] text-lg leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 font-medium text-sm">
                        $ {item.price}
                      </p>
                    </div>
                  </div>


                  <button
                    onClick={() => handleRemove(item)}
                    className="btn btn-ghost text-[#FF4D8D] hover:bg-red-50 capitalize font-semibold text-base"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="mt-12 w-full">

                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#94A3B8] text-lg font-medium">
                    Total:
                  </span>
                  <span className="text-[#101727] text-2xl font-bold">
                    $ {totalPrice}
                  </span>
                </div>


                <button
                  onClick={handlePayment}
                  className="btn w-full bg-[#7C2DFF] hover:bg-[#6A25D9] border-none text-white rounded-full h-11 text-lg font-semibold normal-case shadow-lg shadow-purple-100 transition-all"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
};

export default Cart;