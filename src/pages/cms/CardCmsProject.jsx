import React from "react";
import { Link } from "react-router-dom";

export default function CardCmsProject() {
  return (
    <div className="flex justify-between items-center p-3 shadow-md mb-3 group hover:bg-slate-400">
      <h1 className="group-hover:text-white">1</h1>
      <h1 className="group-hover:text-white">Nama Project</h1>
      <h1 className="group-hover:text-white">28 Jan 2023</h1>
      <div className="flex items-center gap-3">
        <Link className="bg-slate-500 text-white px-3 py-1 rounded-md text-sm hover:bg-slate-400">
          Edit
        </Link>
        <Link className="bg-sky-500 text-white px-3 py-1 rounded-md text-sm hover:bg-sky-400">
          Preview
        </Link>
        <Link className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-400">
          Delete
        </Link>
      </div>
    </div>
  );
}
