import React, { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import Notification from "./Notification";

export default function CardCmsProject({ no, id, title, date, onDelete}) {
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-between items-center p-3 shadow-md mb-3 group hover:bg-slate-400">
      <h1 className="group-hover:text-white">{no + 1}</h1>
      <h1 className="group-hover:text-white">{title}</h1>
      <h1 className="group-hover:text-white">{date}</h1>
      <div className="flex items-center gap-3">
        <Link className="bg-slate-500 text-white px-3 py-1 rounded-md text-sm hover:bg-slate-400">
          Edit
        </Link>
        <Link to={`/showcase/${id}`} className="bg-sky-500 text-white px-3 py-1 rounded-md text-sm hover:bg-sky-400">
          Preview
        </Link>
        <button onClick={() => setShowPopupDelete(true)} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-400">
          Delete
        </button>
        {showPopupDelete && (
          <Delete
            idOf={id}
            nameOf={title}
            type={"project"}
            close={setShowPopupDelete}
            onDelete={onDelete}
          />
        )}
        <button onClick={() => setShow(true)}>test</button>
        {show && (
          <Notification close={setShow} button={"close"} what={"Project Deleted Successfully"} daijoubu={true}/>
        )}
      </div>
    </div>
  );
}
