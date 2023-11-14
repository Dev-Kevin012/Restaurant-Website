import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className="text-backgroundColor">
          Indulge in a culinary journey that tantalizes your taste buds and
          transports you to a world of flavors. Our chefs craft each dish with
          passion and precision, ensuring an unforgettable dining experience.
        </p>
        <div className="lg:pl-44">
          <button className="btn btn-info btn-wide">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
