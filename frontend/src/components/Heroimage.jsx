import React from "react";
import Himg from "/images/heroPic.jpg";

const Heroimage = () => {
  return (
    <>
      <div className="sm:h-[40dvh] overflow-hidden bg-center m-3 rounded-3xl  border mt-10   ">
        <img className=" object-cover" src={Himg} alt="" />
      </div>
    </>
  );
};

export default Heroimage;
