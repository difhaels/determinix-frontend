import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCMS from "../../components/cms/CardCMS";

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
    <div>
      <div className="p-5">
        <div className="p-3 shadow-md">Welcome Admin</div>
      </div>
      <div className="p-5">
        <div className="p-5 shadow-md">
          <h1 className=" text-lg pb-4">Content Management</h1>
          <div className="grid grid-cols-3 gap-7">
            <CardCMS what={"GENERAL"} />
            <CardCMS what={"PROJECT"} many={projects.length} />
            <CardCMS what={"ACTIVITIES"} many={activities.length} />
            <CardCMS what={"ARTICLES"} many={articles.length} />
            <CardCMS what={"MEMBERS"} many={members.length} />
          </div>
        </div>
      </div>
    </div>
  );
}
