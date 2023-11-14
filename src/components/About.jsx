import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Discover Our Culinary Passion
        </h1>
        <p>
          Embark on a culinary journey like no other at our restaurant. Our
          chefs, driven by a passion for creating exquisite dishes, bring
          together flavors that will tantalize your taste buds and leave you
          craving for more.
        </p>
        <p>
          At our establishment, we pride ourselves on using only the finest
          locally sourced ingredients. From farm-fresh produce to premium cuts
          of meat, every dish is a masterpiece crafted with dedication and
          attention to detail.
        </p>
        <p>
          Whether you're a connoisseur seeking new gastronomic adventures or
          someone looking for a comforting meal that feels like home, our
          diverse menu has something for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
