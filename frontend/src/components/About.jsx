import React from "react";
import fpic from "/images/featurePic.jpg";
import chef from "/images/chefPic.jpg";
import sea from "/images/seafoodPic.jpg";

const About = () => {
  return (
    <>
      <div className="mt-32 p-3 flex flex-col-reverse  md:flex-row gap-10 ">
        {/* left */}
        <div className="md:w-1/2 w-full mt-10 sm:mt-0">
          <p className="font-pop text-base md:text-xl text-para text-center md:text-start w-full  ">
            Feature
          </p>
          <h1 className="text-h1 font-gs text-3xl sm:text-[40px] md:text-5xl mt-4 text-center md:text-start">
            Experience the Flavors of Our Restaurant
          </h1>
          <p className="font-pop text-base md:text-xl text-para mt-4 text-center md:text-start">
            Indulge in our signature dishes and discover our daily specials. We
            offer a unique dining experience that will delight your taste buds.
          </p>
          <div className="flex gap-3 mt-5">
            {/* left */}
            <div className="w-1/2">
              <div className="flex md:justify-start justify-center ">
                <img className="w-40  rounded-md" src={sea} alt="" />
              </div>
              <h2 className="text-h1 font-gs text-xl mt-3 text-center md:text-start">
                Signature dishes.
              </h2>
              <p className="text-para font-pop mt-3 text-center md:text-start">
                Try our mouthwatering steak, fresh seafood, and delectable
                desserts.
              </p>
            </div>
            {/* right */}
            <div className="w-1/2">
              <div className="flex md:justify-start justify-center ">
                <img className="w-40 rounded-md" src={chef} alt="" />
              </div>
              <h2 className="text-h1 font-gs text-xl mt-3 text-center md:text-start">
                Daily Specials
              </h2>
              <p className="text-para font-pop mt-3 text-center md:text-start">
                Discover our chef's creative creations that change every day.
              </p>
            </div>
          </div>
          <div className="flex md:justify-start justify-center">
            <button className="bg-buttonbg font-pop p-2 rounded-md text-xl text-bg mt-10 ">
              Book now
            </button>
          </div>
        </div>
        {/* right */}
        <div className="md:w-1/2 w-full rounded-3xl overflow-hidden">
          <img className="rounded-3xl" src={fpic} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
