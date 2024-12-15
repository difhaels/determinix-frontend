import React from "react";
import { useParams } from "react-router-dom";

import { projects } from "../test/constant";

export default function ShowcaseDetail() {

  const { id } = useParams();
  const project = projects.find((item) => item.id === parseInt(id));

  return (
    <div className="bg-white p-6 rounded shadow-lg max-w-sm">
      <h1>{project.title}</h1>
      <ul>
        {project.members.map((member) => {
          return <li>{member}</li>
        })}
      </ul>
    </div>
  );
}
