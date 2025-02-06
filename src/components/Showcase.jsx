import React, { useEffect, useState } from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardShowCase from "../elements/CardShowCase";
import More from "../elements/More";
import { useNavigate } from "react-router-dom";

export default function Showcase() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [navigate]);

  const projectSlice = projects ? projects.slice(0, 3) : [];

  return (
    <div>
      <Divider />
      <Title what={"Showcase"} />
      <div className="flex justify-center py-10 flex-wrap gap-3">
        {projectSlice.map((project) => {
          return (
            <CardShowCase
              key={project._id}
              id={project._id}
              title={project.title}
              createdAt={project.createdAt}
              head={project.head}
              contributor={
                Array.isArray(project.contributor)
                  ? project.contributor.map((member) => member.name)
                  : []
              }
              banner={project.banner}
              full={true}
            />
          );
        })}
      </div>
      <More what={"Showcases"} where={"showcase"} />
    </div>
  );
}
