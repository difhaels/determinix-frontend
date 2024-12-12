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
    <nav className={`top-0 h-[4rem] w-full flex justify-between fixed z-[2] py-0 px-16 items-center ${isScrolled ? "bg-white" : ""}`}>
      <div className="flex h-10">
        <img src={dxlogo} alt="dxlogo"/>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-20">
          {links.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        Sign in
      </div>
    </nav>
  );
}
