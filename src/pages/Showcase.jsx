import React, { useEffect, useState } from "react";
import "../css/output.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../elements/PageTilte";
import CardShowCase from "../elements/CardShowCase";
import { useNavigate } from "react-router-dom";

export default function Showcase() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [projects, setProjects] = useState([]);
  // panggil project
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [navigate]);

  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="bg-gradient-to-b from-sky-300 to-white">
        <PageTitle what={"Showcase"} />
        <div className="flex justify-center pt-10 flex-wrap gap-3">
          <div className="flex justify-center pt-10 flex-wrap gap-3">
            {Array.isArray(projects) && projects.length > 0 ? (
              projects.map((project, index) => (
                <CardShowCase
                  key={`${project._id}-${index}`}
                  id={project._id}
                  title={project.title}
                  date={project.date}
                  members={
                    Array.isArray(project.members)
                      ? project.members.map((member) => member.name)
                      : []
                  }
                  img={project.img}
                  full={true}
                />
              ))
            ) : (
              <p>Loading projects...</p>
            )}
          </div>
        </div>
      </div>
      <div className="footer pt-16">
        <Footer fix={0} />
      </div>
    </div>
  );
}
