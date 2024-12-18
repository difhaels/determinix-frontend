import React from "react";
import "../css/output.css"
import { Link } from "react-router-dom";

export default function CardArticles({id, writer, date, title, type, short, img ,full}) {
  return (
    <div className={`bg-white px-2 py-2 ${full?"px-3 pt-3 pb-6 shadow-lg":"flex"}`}>
      <div className="w-64 h-32">
        <img
          src={img}
          alt={title}
          className="w-full h-full "
        />
      </div>
      <div className="w-64 px-2">
        {full?<h1 className="text-base underline text-slate-600">{type}</h1>:""}
        <h1 className="text-sm text-slate-600">{date}</h1>
        <h1 className="text-base font-medium">{title}</h1>
        {full?<h1 className="text-sm text-slate-600">{writer}</h1>:""}
        <h1>{short}</h1>
        <Link to={`/article/${id}`} className="text-sm text-sky-500 hover:text-sky-300">Read More</Link>
      </div>
    </div>
  );
}
