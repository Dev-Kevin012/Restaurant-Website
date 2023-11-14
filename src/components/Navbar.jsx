import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { openCart } from "./CartModal";
import useCartStore from "../store/cartStore";

const Navbar = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className=" fixed w-full">
      <div className=" flex flex-row justify-between p-5 md:px-16 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className=" flex flex-row items-center cursor-pointer">
          <span>
            <BiRestaurant size={32} />
          </span>
          <h1 className=" text-xl font-semibold">Foodo</h1>
        </div>
        <div className="indicator">
          {cartItems.length > 0 && (
            <span className="indicator-item badge badge-error">
              {cartItems.length}
            </span>
          )}
          <button className="btn btn-sm" onClick={openCart}>
            <BsFillCartFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
