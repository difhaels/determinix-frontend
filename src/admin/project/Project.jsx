import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import expired from "../utils/expiredToken";
import Notification from "../components/Notification";

export default function Project() {
  useEffect(() => {
    expired();
  }, []);

  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);

  const [projects, setProjects] = useState([]);

  // panggil project
  const fetchProjects = () => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  };

  useEffect(() => {
    fetchProjects();
  }, [navigate]);

  const handleDelete = (deletedId) => {
    setProjects((prev) => prev.filter((p) => p._id !== deletedId));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <div className="p-5">
      <div className="p-5 mb-5 shadow-md flex justify-between">
        <h1 className="text-xl font-semibold">Project Management</h1>
        <Link
          className="bg-red-500 text-white px-2 py-1 rounded-sm hover:scale-105"
          to={"/dashboard"}
        >
          back
        </Link>
      </div>
      <div className="p-5 mb-5 shadow-md">
        <div className="font-semibold">
          <span>
            Total Project :{" "}
            <span className="text-green-500">{projects.length}</span>{" "}
          </span>
        </div>
        <Link
          to={"/add-project"}
          className="mt-4 bg-green-500 text-white flex justify-center items-center p-3 hover:bg-green-400"
        >
          <div className="w-full border-2 border-dashed flex justify-center py-2 text-lg">
            <h1>Create New Project "+"</h1>
          </div>
        </Link>
      </div>
      <div className="p-5 mb-5 shadow-md">
        <div className="flex justify-between items-center mb-3">
          <h1>Projects</h1>
          <svg
            className="w-4 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={fetchProjects}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5.39092 5.89092L8.5 9H2.5V3L5.39092 5.89092ZM5.39092 5.89092C7.03504 4.1131 9.38753 3 12 3C16.6326 3 20.4476 6.50005 20.9451 11M18.6091 18.1091L21.5 21V15H15.5L18.6091 18.1091ZM18.6091 18.1091C16.965 19.8869 14.6125 21 12 21C7.36745 21 3.55237 17.5 3.05493 13"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div>
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project, index) => (
              <Card
                no={index}
                key={`${project._id}-${index}`}
                // linked and delete
                id={project._id}
                title={project.title}
                types={"projects"}
                type={"project"}
                date={project.date}
                onDelete={handleDelete}
                where={"showcase"}
              />
            ))
          ) : (
            <p>Loading projects...</p>
          )}
          {/* Notifikasi Global di Parent */}
          {showNotification && (
            <Notification
              close={() => setShowNotification(false)}
              button="close"
              what="Project Deleted Successfully"
              daijoubu={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}
