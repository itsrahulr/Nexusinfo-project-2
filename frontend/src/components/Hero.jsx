import React from "react";

const Hero = () => {
  return (
    <>
      <div className="">
        <h1 className="text-h1 font-gs text-3xl sm:text-[40px] md:text-5xl w-full md:w-9/12  mt-24 p-3 indent-20">
          {" "}
          Experience the Finest Dining in Town at Our Restaurant.
        </h1>
        {/* paragraph */}
        <div className="w-full flex justify-center   md:justify-end mt-20 p-3">
          <div className="w-[400px]">
            <p className="text-base text-center sm:text-left md:text-xl font-pop poppins-regular text-para">
              Embark on a Culinary Odyssey with Our Exquisite Menu and Refined
              Ambiance
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="bg-buttonbg p-2 rounded-md font-pop text-bg mt-5">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
