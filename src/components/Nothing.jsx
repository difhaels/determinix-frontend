import React from "react";

import error from "../assets/error.png";
import { Link } from "react-router-dom";

export default function Nothing({ what, desc }) {
  return (
    <div className="flex items-center gap-3 justify-center pt-12">
      <img src={error} alt="" className="w-20" />
      <div>
        <h1 className="font-semibold text-lg">{what}</h1>
        <h1>{desc}</h1>
        <div className="pt-2">
          <Link to={-1} className="bg-sky-500 text-white p-1 rounded-sm">Refresh</Link>
        </div>
      </div>
    </div>
  );
}
