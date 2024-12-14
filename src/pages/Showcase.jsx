import React, { useEffect, useState } from "react";
import "../css/output.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../elements/PageTilte";
import CardShowCase from "../elements/CardShowCase";

export default function Showcase() {
  const projects = [
    { id: 81, title: "Project 1", date: "22-08-2023", members: ["agung", "albi", "aru"] },
    {
      id: 82,
      title: "Project 2",
      date: "22-08-2023",
      members: ["agung", "wisnu", "beni", "chandra"],
    },
    {
      id: 83,
      title: "Project 3",
      date: "22-08-2023",
      members: ["agung", "dian", "chandra", "krisna"],
    },
    {
      id: 84,
      title: "Project 4",
      date: "22-08-2023",
      members: ["albi", "dian", "chandra", "wisnu"],
    },
    {
      id: 85,
      title: "Project 5",
      date: "22-08-2023",
      members: ["agung", "aru", "chandra", "krisna"],
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="bg-gradient-to-b from-sky-300 to-white">
        <PageTitle what={"Showcase"} />
        <div className="flex justify-center pt-10 flex-wrap gap-3">
          {projects.map((project) => {
            return <CardShowCase key={project.id} id={project.id} title={project.title} date={project.date} members={project.members} full={true} />;
          })}
        </div>
      </div>
      <div className="footer pt-16">
        <Footer fix={0} />
      </div>
    </div>
  );
}
