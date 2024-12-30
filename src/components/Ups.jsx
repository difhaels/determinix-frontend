import React from "react";

import error from "../assets/error.png"

export default function Ups({why, desc, close}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md flex gap-3 justify-center items-center">
        <div>
          <img src={error} alt="error" className="w-28" />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">{why}</h2>
          <p className="mb-4">{desc}</p>
          <button
            onClick={() => close(false)}
            className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
