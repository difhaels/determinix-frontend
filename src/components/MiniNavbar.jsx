import React from "react";
import { Link } from "react-router-dom";

export default function MiniNavbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Showcase", link: "/showcase" },
    { name: "Activities", link: "/activities" },
    { name: "Articles", link: "/articles" },
    { name: "About", link: "/about" },
  ];
  return (
    <ul className="fixed lg:hidden bg-slate-500 opacity-85 text-slate-100 px-3 pb-2 rounded-lg text-lg right-4 top-16">
      {links.map(({ name, link }) => {
        return (
          <li key={name} className="pt-2">
            <Link to={link}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
