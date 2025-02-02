import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function CardShowCase({ id, title, date, members,imgBanner, full }) {
  const participant = members ? members.slice(0, 3).map(member => member.split(" ")[0]) : [];
  return (
    <Link
      to={`/showcase/${id}`}
      className={`bg-white px-2 py-2 ${
        full
          ? "px-3 pt-3 pb-6 shadow-lg hover:scale-105 cursor-pointer transition"
          : ""
      }`}
    >
      <div className="w-72 h-48 overflow-hidden">
        <img
          src={imgBanner}
          alt={title}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="px-2">
        <h1 className="text-base">{title}</h1>
        <h1 className="text-sm text-slate-600">{date}</h1>
        <div className="flex gap-1 pt-1">
          {participant.map((member) => {
            return (
              <div key={member} className="bg-rose-500 px-1 py-[1px] rounded-md border-2 border-rose-800 text-slate-200 text-xs">
                {member}
              </div>
            );
          })}
          <div className="bg-rose-500 px-1 py-[1px] rounded-md border-2 border-rose-800 text-slate-200 text-xs">
            <EllipsisHorizontalIcon className="w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
