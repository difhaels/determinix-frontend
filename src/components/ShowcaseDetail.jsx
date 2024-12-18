import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/solid";

import { projects } from "../test/constant";
import Up from "../elements/Up";

export default function ShowcaseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((item) => item.id === parseInt(id));
  const scrollRef = useRef();

  return (
    <div ref={scrollRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70  overflow-auto">
      <div className="max-h-[90vh] w-full max-w-6xl p-6 rounded-md pr-10 scroll">
        <div className="pb-3 flex items-end justify-between">
          <div>
            <h1 className="text-white text-xl font-semibold">
              {project.title}
            </h1>
            <div className="flex gap-2">
              {project.members.map((member) => {
                return (
                  <h1 className="first-letter:uppercase text-white">
                    {member}
                  </h1>
                );
              })}
            </div>
          </div>
          <div onClick={()=> {navigate('/showcase')}} className="w-7 h-7 bg-black text-white rounded-full opacity-70 inset-0 p-1 cursor-pointer hover:opacity-50"><XMarkIcon/></div>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={project.img} alt={project.title} />
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit, ea delectus possimus necessitatibus sed impedit,
            porro, voluptatum dolorem fugiat quidem veniam? Molestiae nisi,
            facere suscipit facilis, fugit eius temporibus mollitia obcaecati
            officia, qui beatae.
          </h1>
          <img src={project.img} alt={project.title} />
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit, ea delectus possimus necessitatibus sed impedit,
            porro, voluptatum dolorem fugiat quidem veniam? Molestiae nisi,
            facere suscipit facilis, fugit eius temporibus mollitia obcaecati
            officia, qui beatae.
          </h1>
          <img src={project.img} alt={project.title} />
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit, ea delectus possimus necessitatibus sed impedit,
            porro, voluptatum dolorem fugiat quidem veniam? Molestiae nisi,
            facere suscipit facilis, fugit eius temporibus mollitia obcaecati
            officia, qui beatae.
          </h1>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit, ea delectus possimus necessitatibus sed impedit,
            porro, voluptatum dolorem fugiat quidem veniam? Molestiae nisi,
            facere suscipit facilis, fugit eius temporibus mollitia obcaecati
            officia, qui beatae.
          </h1>
        </div>
      </div>
      <Up scrollRef={scrollRef} />
    </div>
  );
}
