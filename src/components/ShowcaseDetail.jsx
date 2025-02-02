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
      .then((data) => setProject(data))
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
            <div className="flex gap-2">
              {Array.isArray(project.members) && project.members.length > 0 ? (
                project.members.map((member) => {
                  return (
                    <Link
                      to={`/members/${member._id}`}
                      className="cursor-pointer flex text-white gap-2"
                    >
                      <h1
                        className="first-letter:uppercase text-white hover:text-blue-600"
                        key={member._id}
                      >
                        {member.name}
                      </h1>
                      {" | "}
                    </Link>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
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
          {Array.isArray(project.imgUrl) ? (
            <>
              <img src={project.imgUrl[0]} alt={project.title} />
              <h1 className="py-1">{project.description}</h1>
              {project.imgUrl[1] ? (
                <div>
                  <h1 className="font-semibold pb-1">Attachment 1:</h1>{" "}
                  <img src={project.imgUrl[1]} alt={project.title} />
                  <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laborum reprehenderit, ea delectus possimus necessitatibus
                    sed impedit, porro, voluptatum dolorem fugiat quidem veniam?
                    Molestiae nisi, facere suscipit facilis, fugit eius
                    temporibus mollitia obcaecati officia, qui beatae.
                  </h1>
                </div>
              ) : (
                null
              )}
              {project.imgUrl[2] ? (
                <div>
                  <h1 className="font-semibold pb-1">Attachment 1:</h1>{" "}
                  <img src={project.imgUrl[1]} alt={project.title} />
                  <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laborum reprehenderit, ea delectus possimus necessitatibus
                    sed impedit, porro, voluptatum dolorem fugiat quidem veniam?
                    Molestiae nisi, facere suscipit facilis, fugit eius
                    temporibus mollitia obcaecati officia, qui beatae.
                  </h1>
                </div>
              ) : (
                null
              )}
              {project.imgUrl[3] ? (
                <div>
                  <h1 className="font-semibold pb-1">Attachment 1:</h1>{" "}
                  <img src={project.imgUrl[1]} alt={project.title} />
                  <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laborum reprehenderit, ea delectus possimus necessitatibus
                    sed impedit, porro, voluptatum dolorem fugiat quidem veniam?
                    Molestiae nisi, facere suscipit facilis, fugit eius
                    temporibus mollitia obcaecati officia, qui beatae.
                  </h1>
                </div>
              ) : (
                null
              )}
            </>
          ) : (
            null
          )}
        </div>
        <div className="footer pt-2">
          <Footer fix={0} />
        </div>
      </div>
      <Up scrollRef={scrollRef} />
    </div>
  );
}
