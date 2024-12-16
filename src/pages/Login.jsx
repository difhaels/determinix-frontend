import React from "react";
import dx from "../assets/dx-logo.png";

export default function Login() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70  overflow-auto">
      <div className="w-full max-w-md p-6 pr-10">
        <div className="bg-white p-8 rounded-md">
          <div className="flex justify-center">
            <img src={dx} alt="dxlogo" className="w-10" />
          </div>
          <form action="" method="post" className="pt-3">
            <label htmlFor="uname" className="font-semibold">Username</label>
            <input type="text" name="uname" className="w-full border-2 border-slate-900 rounded-md px-2 py-1 text-lg"/>
            <div className="mt-2"></div>
            <label htmlFor="pwd" className="font-semibold">Password</label>
            <input type="password" name="pwd" className="w-full border-2 border-slate-900 rounded-md px-2 py-1 text-lg"/>
            <button type="submit" className="bg-rose-600 text-slate-100 rounded-md w-full py-2 mt-3 hover:bg-red-700">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
