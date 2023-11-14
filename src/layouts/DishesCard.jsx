import React from "react";
import { toast } from "sonner";
import { IoCartOutline } from "react-icons/io5";
import useCartStore from "../store/cartStore";

const DishesCard = ({ img, price, name, id }) => {
  const incrementCartItem = useCartStore((state) => state.incrementCartItem);

  const handleIncrement = () => {
    toast.success("Item added to cart!");
    incrementCartItem({ itemId: id, itemName: name, itemPrice: price });
  };

  return (
    <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className=" rounded-xl" src={img} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-3">{name}</h3>
        <div className=" flex flex-col items-center justify-center gap-2">
          <h3 className=" font-semibold text-lg"> &#x20B9;{price}</h3>
          <button
            className="btn btn-primary text-white"
            onClick={handleIncrement}
          >
            <IoCartOutline />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
