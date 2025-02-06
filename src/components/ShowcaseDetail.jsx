import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/solid";

import Up from "../elements/Up";
import Footer from "./Footer";

export default function ShowcaseDetail() {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();

  const [project, setProject] = useState([{}]);
  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [id, navigate]);

  if (!project) return <div>Loading...</div>;

  return (
    <div
      ref={scrollRef}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70  overflow-auto"
    >
      <div className="max-h-[90vh] w-full max-w-6xl px-6 rounded-md scroll">
        <div className="pb-3 flex items-end justify-between">
          <div>
            <h1 className="text-white text-xl font-semibold">
              {project.title}
            </h1>
            <span className="flex text-white gap-2">
              Head :
              <Link
                to={`/members/${project?.head?._id}`}
                className="cursor-pointer first-letter:uppercase text-white hover:text-blue-600"
              >
                {project?.head?.name}
              </Link>
            </span>
            <span className="flex gap-2 text-white">
              Contributor :
              <div className="flex gap-2">
                {Array.isArray(project.contributor) &&
                project.contributor.length > 0 ? (
                  project.contributor.map((cont) => {
                    return (
                      <Link
                        to={`/members/${cont._id}`}
                        className="cursor-pointer flex text-white gap-2"
                      >
                        <h1
                          className="first-letter:uppercase text-white hover:text-blue-600"
                          key={cont._id}
                        >
                          {cont.name}
                        </h1>
                        {" | "}
                      </Link>
                    );
                  })
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </span>
            <span className="text-white">Created At : {project.createdAt}</span>
          </div>
          <div
            onClick={() => {
              if (window.history.state && window.history.state.idx > 0) {
                navigate(-1); // Kembali ke halaman sebelumnya jika ada
              } else {
                navigate("/showcase"); // Fallback ke halaman utama
              }
            }}
            className="w-7 h-7 bg-black text-white rounded-full opacity-70 inset-0 p-1 cursor-pointer hover:opacity-50"
          >
            <XMarkIcon />
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-lg">
          <img src={project.banner} alt="" />
          <h1 className="py-3">{project.description}</h1>

          {project.imgAtt1 ? (
            <div>
              <h1 className="font-semibold pb-2">Attachment 1:</h1>
              <img src={project.imgAtt1} />
            </div>
          ) : null}
          {project.att1description ? (
            <div>
              <h1 className="py-3">{project.att1description}</h1>
            </div>
          ) : null}

          {project.imgAtt2 ? (
            <div>
              <h1 className="font-semibold pb-2">Attachment 2:</h1>
              <img src={project.imgAtt2} />
            </div>
          ) : null}
          {project.att2description ? (
            <div>
              <h1 className="py-3">{project.att2description}</h1>
            </div>
          ) : null}

          {project.imgAtt3 ? (
            <div>
              <h1 className="font-semibold pb-2">Attachment 3:</h1>
              <img src={project.imgAtt3} />
            </div>
          ) : null}
          {project.att3description ? (
            <div>
              <h1 className="py-3">{project.att3description}</h1>
            </div>
          ) : null}
        </div>
        <div className="footer pt-2">
          <Footer fix={0} />
        </div>
      </div>
      <Up scrollRef={scrollRef} />
    </div>
  );
}
