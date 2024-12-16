import React, { useState } from "react";
import dxt1 from "../assets/dxt1.jpeg";
import dxt2 from "../assets/dxt2.jpeg";
import dxt4 from "../assets/dxt4.jpg";
import { Link } from "react-router-dom";

export default function About() {
  const [test, setTest] = useState(0);
  const dxt = [
    { img: dxt2, alt: "dx2" },
    { img: dxt1, alt: "dx1" },
    { img: dxt4, alt: "dx4" },
  ];
  return (
    <div className="px-16">
      <h1 className="font-bold text-5xl text-center italic">
        DETERMINI<span className="text-red-600">X</span>
      </h1>
      <h1 className="text-center w-1/2 mx-auto mt-3">
        A community committed to ruling the world through kindness. <br />
        Together, we learn, create and grow to create positive innovations for
        society.
      </h1>
      <div className="flex justify-center mt-5">
        <Link to={"/about"}
          onClick={() => {
            setTest(test + 1);
            console.log(test + 1);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-400 hover:scale-105"
        >
          Learn More
        </Link>
      </div>
      <div className="flex justify-center gap-5 mt-5">
        {dxt.map(({ img, alt }) => {
          return (
            <div className="w-64 h-44 overflow-hidden bg-white shadow-lg px-2 py-2" key={alt}>
              <img src={img} alt={alt} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
