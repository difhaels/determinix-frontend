import React from "react";
import vec1 from "./asset/vec1.jpg";
import vec2 from "./asset/vec2.jpg";
import vec3 from "./asset/vec3.jpg";
import vec4 from "./asset/vec4.jpg";
import vec5 from "./asset/vec5.jpg";
import { Link } from "react-router-dom";

export default function CardCMS({ what, where, many }) {
  return (
    <div className="shadow-lg">
      {what === "GENERAL" ? (
        <Link to={where}>
          <img src={vec1} className="w-64 h-28" alt={what + ".img"} />
        </Link>
      ) : (
        ""
      )}
      {what === "PROJECT" ? (
        <Link to={where}>
          <img src={vec2} className="w-64 h-28" alt={what + ".img"} />
        </Link>
      ) : (
        ""
      )}
      {what === "ACTIVITIES" ? (
        <Link to={where}>
          <img src={vec3} className="w-64 h-28" alt={what + ".img"} />
        </Link>
      ) : (
        ""
      )}
      {what === "ARTICLES" ? (
        <Link to={where}>
          <img src={vec4} className="w-64 h-28" alt={what + ".img"} />
        </Link>
      ) : (
        ""
      )}
      {what === "MEMBERS" ? (
        <Link to={where}>
          <img src={vec5} className="w-64 h-28" alt={what + ".img"} />
        </Link>
      ) : (
        ""
      )}
      <div className="p-3">
        {many ? <h1 className="text-slate-500 text-base">Total {many}</h1> : ""}
        <Link to={where}>
          <h1 className="hover:underline">{what}</h1>
        </Link>
      </div>
    </div>
  );
}
