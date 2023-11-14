import React from "react";
import { createPortal } from "react-dom";
import CartItem from "./CartItem";
import useCartStore from "../store/cartStore";

export const openCart = () => {
  document.getElementById("cart-modal").showModal();
};

export const closeCart = () => {
  document.getElementById("cart-modal").close();
};

const CartModal = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalPrice = cartItems?.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.count),
    0
  );

  return createPortal(
    <dialog id="cart-modal" className="modal">
      <div className="modal-box overflow-y-auto">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={closeCart}
        >
          ✕
        </button>
        <h3 className="font-bold text-2xl text-center py-2 border-b-2 border-gray-300">
          Your Cart
        </h3>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((cartItem, i) => (
              <CartItem
                name={cartItem.name}
                price={cartItem.price}
                id={cartItem.id}
                count={cartItem.count}
                key={`${cartItem.id}-${i}`}
              />
            ))}
            <h3 className="text-center font-bold text-xl text-purple-500">
              Total amount: &#x20B9;{totalPrice}
            </h3>
          </>
        ) : (
          <h3 className="text-red-500 text-center font-bold mt-4 text-lg">
            Your cart is Empty!
          </h3>
        )}
        <div className="modal-action space-x-4">
          <button className="btn btn-error text-gray-100" onClick={closeCart}>
            Cancel
          </button>
          <button className="btn btn-success  text-gray-100">
            Place Order
          </button>
        </div>
      </div>
    </dialog>,
    document.body
  );
};

export default CartModal;
