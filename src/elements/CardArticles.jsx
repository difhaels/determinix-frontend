import React from "react";
import lepy from "../assets/lepy.png";

export default function CardArticles() {
  return (
    <div className="px-2 py-2 flex">
      <div className="w-64 h-32">
        <img
          src={lepy}
          alt="a"
          className="w-full h-full "
        />
      </div>
      <div className="w-64 px-2">
        <h1 className="text-sm text-slate-600">June 19, 2024</h1>
        <h1 className="text-base font-medium">Articles 01</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a voluptas, dicta ex reprehenderit ullam?</h1>
        <a href="#" className="text-sm text-sky-500">Read More</a>
      </div>
    </div>
  );
}
