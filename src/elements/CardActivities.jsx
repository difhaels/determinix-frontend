import React from "react";
import { Link } from "react-router-dom";

export default function CardActivities({id, title, date, img,  full }) {
  return (
    <div className={`bg-white px-2 py-2 ${full ? "p-4 shadow-lg lg:flex" : ""}`}>
      <div className="w-72 h-44 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover " />
      </div>
      <div className="w-72 px-2">
        <h1 className="text-sm text-slate-600">{date}</h1>
        <h1 className="text-base font-medium">{title}</h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem a voluptas, dicta ex reprehenderit ullam?
        </h1>
        <div className="hover:scale-105 hover:px-1 w-fit">
          <Link to={`/activity/${id}`} className="text-sm text-sky-500">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
