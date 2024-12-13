import React from "react";
import lepy from "../assets/lepy.png";
import "../css/output.css"

export default function CardArticles({full}) {
  return (
    <div className={`bg-white px-2 py-2 ${full?"px-3 pt-3 pb-6 shadow-lg":"flex"}`}>
      <div className="w-64 h-32">
        <img
          src={lepy}
          alt="a"
          className="w-full h-full "
        />
      </div>
      <div className="w-64 px-2">
        {full?<h1 className="text-base underline text-slate-600">GENERAL</h1>:""}
        <h1 className="text-sm text-slate-600">June 19, 2024</h1>
        <h1 className="text-base font-medium">Articles 01</h1>
        {full?<h1 className="text-sm text-slate-600">Agung Saputra</h1>:""}
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a voluptas, dicta ex reprehenderit ullam?</h1>
        <a href="#" className="text-sm text-sky-500">Read More</a>
      </div>
    </div>
  );
}
