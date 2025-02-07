import React, { useState } from "react";

import error from "../../assets/error.png";
import ok from "../../assets/ok.png";

export default function Notification({ what, close, button, daijoubu }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md min-w-72">
        <div className="mx-auto text-center py-2">
          {daijoubu?<img src={ok} alt="error" className="w-16 mx-auto" />:<img src={error} alt="error" className="w-16 mx-auto" />}
          <h1 className="text-md font-semibold">{what}</h1>
        </div>
        <button
            onClick={() => close(false)}
            className="px-2 bg-slate-500 hover:bg-slate-400 w-full text-white flex items-center justify-center"
          >
            {button}
          </button>
      </div>
    </div>
  );
}
