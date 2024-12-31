import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardShowCase from "../elements/CardShowCase";

export default function MemberShowcase() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [person, setPerson] = useState({});

  const { id } = useParams();
  // panggil member
  useEffect(() => {
    fetch(`http://localhost:5000/member/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [id, navigate]);

  const [projects, setProjects] = useState([]);
  // panggil project by member
  useEffect(() => {
    fetch(`http://localhost:5000/mp/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, [id, navigate]);

  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="pt-32 text-lg font-semibold">
        <h1 className="px-5 lg:px-16">Project by {person.name}</h1>
        <div className="flex justify-center py-10 flex-wrap gap-3">
          {projects.map((project) => {
            return (
              <CardShowCase
                key={project._id}
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
            );
          })}
        </div>
      </div>
      <div className="footer">
        <Footer fix={0} />
      </div>
    </div>
  );
}
