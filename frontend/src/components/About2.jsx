import React from "react";
import abt from "/images/aboutPic.jpg";

const About2 = () => {
  return (
    <>
      <div className="flex-col flex md:flex-row p-3 gap-10 items-center">
        <div className="md:w-1/2 w-full">
          <img className="rounded-3xl" src={abt} alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="font-gs text-h1 text-3xl sm:text-[40px] md:text-5xl text-center md:text-start">
            Experience the culinary journey of a lifetime at our restaurant.
          </h1>
          <p className="text-para font-pop text-base md:tex-xl mt-5 text-center md:text-start">
            Our restaurant has a rich history, rooted in a passion for creating
            exceptional dining experiences. With a philosophy centered around
            using the finest ingredients and innovative techniques, our chef
            brings a unique blend of flavors to every dish.
          </p>
        </div>
      </div>
    </>
  );
};

export default About2;
