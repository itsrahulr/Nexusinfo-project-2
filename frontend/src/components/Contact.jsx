import React from "react";

const Contact = () => {
  return (
    <>
      <div className="p-3 flex  md:flex-row flex-col mt-10">
        <div className="md:w-1/2 w-full flex flex-col ">
          <h1 className="text-h1 font-gs text-3xl sm:text-[40px] md:text-5xl text-center md:text-start">
            Get in touch.
          </h1>
          <p className="text-para font-pop text-base md:text-xl  text-center md:text-start">
            Visit us to experience the best flavors in town. We're open every
            day from 9 AM to 10 PM.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="text-para font-pop flex flex-col gap-6 mt-5 md:mt-0">
            <ul className="text-center md:text-start">
              <li>Email</li>
              <li>info@dopeemail.com</li>
            </ul>
            <ul className="text-center md:text-start">
              <li>Phone</li>
              <li>+91 9876543210</li>
            </ul>
            <ul className="text-center md:text-start">
              <li>Office</li>
              <li>No:7, x street , y city , India.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
