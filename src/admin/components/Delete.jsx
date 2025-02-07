import React, { useState } from "react";

import error from "../../assets/error.png";

export default function Delete({ type, idOf, nameOf, close, onDelete }) {
  const [confirm, setConfirm] = useState("");

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/projects/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Perbarui daftar proyek setelah penghapusan
        onDelete(id)
      } else {
        alert("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("An error occurred while deleting the project");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg max-w-md ">
        <div className="px-5 pt-3 pb-2 flex justify-between items-center">
          <h1>Delete {nameOf}</h1>
          <button
            onClick={() => close(false)}
            className="px-2 hover:bg-red-500 text-red-500 hover:text-white flex items-center justify-center"
          >
            x
          </button>
        </div>
        <div className="border-2 mx-auto text-center py-2">
          <img src={error} alt="error" className="w-16 mx-auto" />
          <h1 className="text-md font-semibold">Want to deleted a {type}</h1>
          <h1 className="text-sm">{idOf}</h1>
        </div>
        <div className="px-5 pb-5 pt-2">
          <p className="mb-1">
            To confirm, type "dx/{nameOf}" in the box below
          </p>
          <input
            type="text"
            className="mb-2 border-2 border-red-500 rounded-sm w-full px-2"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {confirm === "dx/" + nameOf ? (
            <button onClick={() => handleDelete(idOf)} className="flex items-center justify-center bg-red-500 text-white w-full rounded-sm py-1">
              Delete this {type}
            </button>
          ) : (
            <button className="flex items-center justify-center bg-slate-300 text-red-500 w-full rounded-sm py-1">
              Delete this {type}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
