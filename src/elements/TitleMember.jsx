import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function TitleMember({what}) {
  return (
    <div className="mx-10 lg:mx-60 flex items-center group cursor-pointer">
      <div className="bg-rose-600 w-2 h-8 mr-2"></div>
      <h1 className="text-lg font-semibold">{what}</h1>
      <ChevronRightIcon className="w-8 mt-1 group-hover:text-rose-600" />
    </div>
  );
}
