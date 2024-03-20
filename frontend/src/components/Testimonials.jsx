import React from "react";
import bro from "/images/bro.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="mt-10 p-3">
        <div>
          <h1 className="text-h1 font-gs text-3xl sm:text-[40px] md:text-5xl text-center md:text-start">
            What Our Customers Say
          </h1>
          <p className="text-para font-pop text-base md:text-xl  text-center md:text-start">
            Read testimonials from our satisfied customers
          </p>
        </div>
        <div>
          <p className="text-para font-pop text-base md:text-xl w-full md:w-1/2  mt-20  text-center md:text-start">
            Our experience at the restaurant was amazing. The food was delicious
            and the service was excellent.
          </p>
          <div className="flex  gap-3 items-center mt-10 justify-center md:justify-start">
            <img className="w-20 rounded-full" src={bro} alt="" />
            <p className="text-h1 font-pop poppins-regular text-base md:text-xl  text-center md:text-start">
              Raynn
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
