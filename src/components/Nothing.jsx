import React from "react";

import error from "../assets/error.png";

export default function Nothing({what, desc}) {
  return (
    <div className="flex items-center gap-3 justify-center pt-12">
      <img src={error} alt="" className="w-20" />
      <div>
        <h1 className="font-semibold text-lg">{what}</h1>
        <h1>{desc}</h1>
      </div>
    </div>
  );
}
