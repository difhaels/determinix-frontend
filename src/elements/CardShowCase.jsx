import React from "react";
import lepy from "../assets/lepy.png";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
export default function CardShowCase({full}) {
  const nama = ["agung", "salsabil"];

  return (
    <div className={`bg-white px-2 py-2 ${full?"px-3 pt-3 pb-6 shadow-lg hover:scale-105 cursor-pointer transition":""}`}>
      <div className="w-64 h-44 overflow-hidden">
        <img
          src={lepy}
          alt="a"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="px-2">
        <h1 className="text-base">Showcase 01</h1>
        <h1 className="text-sm text-slate-600">21-01-2024</h1>
        <div className="flex gap-1 pt-1">
          {nama.map((n) => {
            return (
              <div className="bg-sky-400 px-1 py-[1px] rounded-md border-2 border-sky-600 text-sky-700 text-xs">
                {n}
              </div>
            );
          })}
          <div className="bg-sky-400 px-1 py-[1px] rounded-md border-2 border-sky-600 text-sky-700 text-xs">
            <EllipsisHorizontalIcon className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
