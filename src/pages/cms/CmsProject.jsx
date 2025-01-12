import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
          <div className="flex justify-between items-center p-3 shadow-md">
            <h1>Nama Project</h1>
            <h1>28 Jan 2023</h1>
            <div className="flex items-center gap-3">
              <Link className="bg-slate-500 text-white px-3 py-1 rounded-md text-sm hover:bg-slate-400">Edit</Link>
              <Link className="bg-sky-500 text-white px-3 py-1 rounded-md text-sm hover:bg-sky-400">Preview</Link>
              <Link className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-400">Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
