import "../css/output.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import dxlogo from "../assets/dx-logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MiniNavbar from "./MiniNavbar";

export default function Navbar({ isScrolled }) {
  const location = useLocation();

  const isActive = path => location.pathname === path;

  const [miniNavbar, setMiniNavbar] = useState(false);

  return (
    <nav
      className={`top-0 h-[4rem] w-full flex justify-between fixed z-[2] py-0 px-4 lg:px-16 items-center ${
        isScrolled ? "bg-white  shadow-sm" : ""
      }`}
    >
      <div className="flex h-8 lg:h-10">
        <img src={dxlogo} alt="dxlogo" />
      </div>
      <div className="hidden lg:block">
        <ul className="flex justify-between items-center gap-20">
          <li className={`hover:text-red-700 ${isActive('/')? "text-red-600 font-bold" : ""}`}>
            <Link to={"/"}>Home</Link>
          </li>
          <li className={`hover:text-red-700 ${isActive('/showcase')? "text-red-600 font-bold" : ""}`}>
            <Link to={"/showcase"}>Showcase</Link>
          </li>
      <li className={`hover:text-red-700 ${isActive('/activities')? "text-red-600 font-bold" : ""}`}>
            <Link to={"/activities"}>Activities</Link>
          </li>
          <li className={`hover:text-red-700 ${isActive('/articles')? "text-red-600 font-bold" : ""}`}>
            <Link to={"/articles"}>Articles</Link>
          </li>
          <li className={`hover:text-red-700 ${isActive('/about')? "text-red-600 font-bold" : ""}`}>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <Link
        to={"/login"}
        className="hidden lg:block bg-red-600 text-white px-2 py-1 rounded-sm cursor-pointer hover:scale-105"
      >
        Login
      </Link>
      <Bars3Icon
        className="lg:hidden w-9 hover:text-slate-600"
        onClick={() => {
          miniNavbar ? setMiniNavbar(false) : setMiniNavbar(true);
        }}
      />
      {miniNavbar && <MiniNavbar />}
    </nav>
  );
}
