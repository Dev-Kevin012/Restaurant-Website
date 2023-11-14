import React from "react";
import { BsTrashFill } from "react-icons/bs";
import useCartStore from "../store/cartStore";

const CartItem = ({ name, id, price, count }) => {
  const incrementCartItem = useCartStore((state) => state.incrementCartItem);
  const decrementCartItem = useCartStore((state) => state.decrementCartItem);
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  const handleRemoveItem = () => {
    removeCartItem(id);
  };

  const handleDecrement = () => {
    decrementCartItem({ itemId: id, itemName: name, itemPrice: price });
  };

  const handleIncrement = () => {
    incrementCartItem({ itemId: id, itemName: name, itemPrice: price });
  };

  return (
    <div className="bg-base-200 my-2 px-4 py-3 flex items-center rounded-lg justify-between">
      <div className="flex flex-col">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm">&#x20B9;{price}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="btn btn-sm btn-accent"
          disabled={count === 1}
          onClick={handleDecrement}
        >
          -
        </button>
        <div className="text-lg">{count}</div>
        <button className="btn btn-sm btn-accent" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button onClick={handleRemoveItem} className="btn btn-error btn-sm ">
        <BsTrashFill className="text-white" />
      </button>
    </div>
  );
};

export default CartItem;
