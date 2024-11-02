
import React from "react";
import CartContent from "./CartList";


const Cart = () => {

  return (
    <div className="mt-4">
      <h1 className="font-inter font-semibold text-xl lg:text-2xl px-3 lg:px-6">
        Your Cart
      </h1>
        <div className="my-4">
          <CartContent/>
        </div>
    </div>
  );
};

export default Cart;
