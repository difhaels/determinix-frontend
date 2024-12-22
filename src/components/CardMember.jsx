import React from "react";

import { Link } from "react-router-dom";

export default function CardMember({ id, name, j, img }) {
  return (
    <Link to={`/member/${id}`} className="grid grid-cols-2 justify-center items-center bg-white w-full px-4 py-3 shadow-md hover:scale-105 cursor-pointer transition lg:mb-0 mb-1">
      {img ? (
        <div className="w-20 h-20">
          <img src={img} alt={name} className="rounded-full" />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-slate-200 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      )}

      <div>
        <h1 className="font-semibold">{name}</h1>
        <h1 className="italic">{j}</h1>
      </div>
    </Link>
  );
}
