import React from "react";
import dx from "../assets/dx-logo.png";

export default function Divider() {
  return (
    <div className="flex items-center my-4 mx-8 lg:mx-16">
      <div className="flex-grow border-t border-gray-400"></div>
      <img src={dx} alt="dx" className="w-5 mx-2"/>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
}
