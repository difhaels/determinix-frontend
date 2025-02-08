import React, { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";

export default function CardCmsProject({ no, id, title, date, onDelete, where, types, type}) {
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  return (
    <div className="flex justify-between items-center p-3 shadow-md mb-3 group hover:bg-slate-400">
      <h1 className="group-hover:text-white">{no + 1}</h1>
      <h1 className="group-hover:text-white">{title}</h1>
      <h1 className="group-hover:text-white">{date}</h1>
      <div className="flex items-center gap-3">
        <Link className="bg-slate-500 text-white px-3 py-1 rounded-md text-sm hover:bg-slate-400">
          Edit
        </Link>
        <Link to={`/${where}/${id}`} className="bg-sky-500 text-white px-3 py-1 rounded-md text-sm hover:bg-sky-400">
          Preview
        </Link>
        <button onClick={() => setShowPopupDelete(true)} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-400">
          Delete
        </button>
        {showPopupDelete && (
          <Delete
            idOf={id}
            nameOf={title}
            types={types}
            type={type}
            close={setShowPopupDelete}
            onDelete={onDelete}
          />
        )}
      </div>
    </div>
  );
}
