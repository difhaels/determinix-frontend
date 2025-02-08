import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCMS from "./CardCMS";
import expired from "./utils/expiredToken";

export default function Dashboard() {
  useEffect(() => {
    expired();
  }, []);

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [articles, setArticles] = useState([]);
  const [members, setMembers] = useState([]);

  const handleLogout = () => {
    fetch("http://localhost:5000/admin/logout", {
      method: "POST", // Sebaiknya POST untuk operasi perubahan
      credentials: "include", // Pastikan cookie sesi dikirim jika pakai session
    })
      .then((response) => {
        if (!response.ok) throw new Error("Logout gagal!");
        return response.json();
      })
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        alert("Logout gagal");
      });
  };
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

  // panggil activities
  useEffect(() => {
    fetch("http://localhost:5000/activities")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [navigate]);

  // panggil articles
  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [navigate]);

  // panggil Member
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [navigate]);

  return (
    <div className="p-5">
      <div className="mb-5 p-3 shadow-md flex justify-between items-center">
        <div> Welcome Admin</div>
        <button onClick={handleLogout} className="bg-red-500 text-white px-2 py-1 rounded-sm hover:scale-105">
          Logout
        </button>
      </div>
      <div className="p-5 shadow-md">
        <h1 className=" text-lg pb-4">Content Management</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <CardCMS what={"GENERAL"} />
          <CardCMS
            what={"PROJECT"}
            many={projects.length}
            where={"project"}
          />
          <CardCMS what={"ACTIVITIES"} many={activities.length} where={"activity"} />
          <CardCMS what={"ARTICLES"} many={articles.length} />
          <CardCMS what={"MEMBERS"} many={members.length} />
        </div>
      </div>
    </div>
  );
}
