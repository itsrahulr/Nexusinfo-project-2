import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="mt-10 p-3 flex md:flex-row flex-col">
        <div>
          <h1 className="text-h1 font-gs text-3xl sm:text-[40px] md:text-5xl text-center md:text-start">
            Stay Updated with Our Newsletter
          </h1>
          <p className="text-para font-pop text-base md:text-xl  text-center md:text-start">
            Get the latest news and special offers.
          </p>
        </div>
        <div className="flex  justify-center items-center w-full  md:w-[500px] mt-5 md:mt-0">
          <form className="" action="">
            <input
              className="w-[250px] h-10 rounded-md border border-buttonbg outline-none placeholder-buttonbg font-pop p-1"
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
            />
            <div className="flex justify-center md:justify-start">
              <button className="p-1 bg-buttonbg text-bg text-xl font-pop rounded-md mt-5 ">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
