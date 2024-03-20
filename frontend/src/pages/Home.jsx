import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Heroimage from "../components/Heroimage";
import About from "../components/About";
import About2 from "../components/About2";
import Testimonials from "../components/Testimonials";
import Gallary from "../components/Gallary";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Heroimage />
      <About />
      <About2 />
      <Testimonials />
      <Gallary />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
