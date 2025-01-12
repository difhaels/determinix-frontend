import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCmsProject from "./CardCmsProject";

export default function CmsProject() {
  const navigate = useNavigate();

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
    <div className="p-5">
      <div className="p-5 mb-5 shadow-md flex justify-between">
        <h1 className="text-xl font-semibold">Project Management</h1>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          back
        </button>
      </div>
      <div className="p-5 mb-5 shadow-md">
        <h1 className="font-semibold">Total Project : <span className="text-green-500">{projects.length}</span> </h1>
      </div>
      <div className="p-5 mb-5 shadow-md">
        <h1>Projects</h1>
        <div>
          <CardCmsProject/>
          <CardCmsProject/>
          <CardCmsProject/>
        </div>
      </div>
    </div>
  );
}
