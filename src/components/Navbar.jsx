import "../css/output.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import dxlogo from "../assets/dx-logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MiniNavbar from "./MiniNavbar";

export default function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "Showcase", link: "/showcase" },
    { name: "Activities", link: "/activities" },
    { name: "Articles", link: "/articles" },
    { name: "About", link: "/about" },
  ];

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
          {links.map(({ name, link }) => {
            return (
              <li key={name} className="hover:text-red-700 hover:scale-105">
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
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
