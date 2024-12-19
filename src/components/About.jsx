import React from "react";
import dxt1 from "../assets/dxt1.jpeg";
import dxt2 from "../assets/dxt2.jpeg";
import dxt4 from "../assets/dxt4.jpg";
import { Link } from "react-router-dom";

export default function About() {
  const dxt = [
    { img: dxt2, alt: "dx2" },
    { img: dxt1, alt: "dx1" },
    { img: dxt4, alt: "dx4" },
  ];
  return (
    <div className="px-4 lg:px-16">
      <h1 className="font-bold text-4xl lg:text-5xl text-center italic">
        DETERMINI<span className="text-red-600">X</span>
      </h1>
      <h1 className="text-center lg:px-0 px-4 lg:w-1/2 mx-auto mt-3">
        A community committed to ruling the world through kindness. <br />
        Together, we learn, create and grow to create positive innovations for
        society.
      </h1>
      <div className="flex justify-center mt-5">
        <Link to={"/about"}
          className="bg-red-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-sm hover:bg-red-400 hover:scale-105"
        >
          Learn More
        </Link>
      </div>
      <div className="lg:flex w-full justify-center gap-5 mt-5">
        {dxt.map(({ img, alt }) => {
          return (
            <div className="w-72 h-48 mx-auto lg:mx-0 overflow-hidden mt-3 lg:mt-0 bg-white shadow-lg px-2 py-2" key={alt}>
              <img src={img} alt={alt} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
