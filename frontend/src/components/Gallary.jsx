import React from "react";
import p1 from "/images/gallary-1.jpg";
import p2 from "/images/gallary-2.jpg";
import p3 from "/images/gallary-3.jpg";

const Gallary = () => {
  return (
    <>
      <h1 className="text-center text-h1 font-gs text-3xl sm:text-[40px] md:text-5xl mt-10">
        Image gallary
      </h1>
      <div className="p-3 flex md:flex-row flex-col mt-10 gap-3">
        <div className="md:w-1/2 w-full ">
          <img className=" rounded-xl md:rounded-3xl" src={p1} alt="" />
        </div>
        <div className="md:w-1/2 w-full ">
          <div className=" ">
            <img className="rounded-xl md:rounded-3xl" src={p3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
