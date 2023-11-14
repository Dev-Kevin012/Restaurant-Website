import React from "react";
import DishesCard from "../layouts/DishesCard";
import { data } from "../constants";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-16 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>
      <div className=" flex flex-wrap gap-6 justify-center">
        {data.map((item) => (
          <DishesCard
            img={item.imageSrc}
            name={item.name}
            price={item.price}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Dishes;
