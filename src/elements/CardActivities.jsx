import React from "react";
import lepy from "../assets/lepy.png";

export default function CardActivities({ full }) {
  return (
    <div className={`bg-white px-2 py-2 ${full ? "p-4 shadow-lg flex" : ""}`}>
      <div className="w-64 h-44 overflow-hidden">
        <img src={lepy} alt="a" className="w-full h-full object-cover " />
      </div>
      <div className="w-64 px-2">
        <h1 className="text-sm text-slate-600">June 19, 2024</h1>
        <h1 className="text-base font-medium">Activities 01</h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem a voluptas, dicta ex reprehenderit ullam?
        </h1>
        <div className="hover:scale-105 hover:px-2">
          <a href="yt.com" className="text-sm text-sky-500">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
