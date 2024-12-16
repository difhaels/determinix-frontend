import React, { useState } from "react";
import dx from "../assets/dx-logo.png";
import wp from "../assets/wplogin.png";
import Error from "../components/Error";

export default function Login() {
  const [showPopupError, setShowPopupError] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${wp})` }}
      />
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative z-10 w-full max-w-md p-6">
        <div className="bg-white p-8 rounded-md">
          <div className="flex justify-center">
            <img src={dx} alt="dxlogo" className="w-10" />
          </div>
          <form action="" method="post" className="pt-3">
            <label htmlFor="uname" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              name="uname"
              className="w-full border-2 border-slate-900 rounded-md px-2 py-1 text-lg"
            />
            <div className="mt-2"></div>
            <label htmlFor="pwd" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="pwd"
              className="w-full border-2 border-slate-900 rounded-md px-2 py-1 text-lg"
            />
            <button
              type="submit"
              className="bg-rose-600 text-slate-100 rounded-md w-full py-2 mt-3 hover:bg-red-700"
            >
              Login
            </button>
          </form>
          <button
            className="bg-slate-800 text-slate-100 rounded-md w-full py-2 mt-2 hover:bg-slate-600"
            onClick={() => setShowPopupError(true)}
          >
            Register
          </button>
          {showPopupError && ( <Error why={"Registration is not open yet"} desc={"we are not ready for this, please try again later"} close={setShowPopupError}/> )}
        </div>
      </div>
    </div>
  );
}
