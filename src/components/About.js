import React from "react";
import Typography from "@material-ui/core/Typography";
import dscbkbietlogo from "../Assets/img/dscbkbietlogo.png";

const About = () => {
  return (
    <div className="flex font-google bg-gray-300 p-14 mt-10 flex-col-reverse md:flex-row justify-center items-center space-x-20">
      <span className="flex flex-col justify-center max-w-2xl">
        <h1 className="font-semibold">About</h1>
        <p>
          Google Developer Student Clubs (GDSC) is a community where programmers
          meet to discuss and work with several Google developer resources and
          products. A DSC event has a diversified event portfolio, from just a
          few people meeting up to build products to large events with demos and
          lectures to conducting big hackathons.
        </p>
      </span>
      <div className="flex justify-center items-center mb-10 border-4 md:mb-0">
        <p className="absolute transform -rotate-45 opacity-20 text-6xl z-10">
          Some Image{" "}
        </p>
        <img className="aboutLogo" src={dscbkbietlogo} alt="Logo" />
      </div>
    </div>
  );
};

export default About;
