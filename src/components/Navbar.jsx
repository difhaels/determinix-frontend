import "../css/output.css";
import { Link } from "react-router-dom";
import React from "react";
import dxlogo from "../assets/dx-logo.png";

export default function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "Showcase", link: "/showcase" },
    { name: "Activities", link: "/activities" },
    { name: "Articles", link: "/articles" },
    { name: "About", link: "/about" },
  ];

  return (
    <nav className={`top-0 h-[4rem] w-full flex justify-between fixed z-[2] py-0 px-4 lg:px-16 items-center ${isScrolled ? "bg-white  shadow-sm" : ""}`}>
      <div className="flex h-8 lg:h-10">
        <img src={dxlogo} alt="dxlogo"/>
      </div>
      <div>
        <ul className="lg:flex justify-between items-center gap-20 hidden">
          {links.map(({ name, link }) => {
            return (
              <li key={name} className="hover:text-red-700 hover:scale-105">
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Link to={'/login'} className="bg-red-600 text-white px-2 py-1 rounded-sm cursor-pointer hover:scale-105">
        Login
      </Link>
    </nav>
  );
}
