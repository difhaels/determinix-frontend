import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [articles, setArticles] = useState([]);
  const [members, setMembers] = useState([]);

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
    <>
      <div>Welcome Admin</div>
      <div>
        <div>General</div>
        <div>
          <div>Project</div>
          <div>Jumlah {projects.length}</div>
        </div>
        <div>
          <div>Activities</div>
          <div>Jumlah {activities.length}</div>
        </div>
        <div>
          <div>Articles</div>
          <div>Jumlah {articles.length}</div>
        </div>
        <div>
          <div>Members</div>
          <div>Jumlah {members.length}</div>
        </div>
      </div>
    </>
  );
}
