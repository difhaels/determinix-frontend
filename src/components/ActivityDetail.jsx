import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/solid";

import Up from "../elements/Up";
import Footer from "./Footer";

export default function ActivityDetail() {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [activity, setActivities] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/activities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [id, navigate]);

  if (!activity) return <div>Loading...</div>;

  return (
    <div
      ref={scrollRef}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70  overflow-auto"
    >
      <div className="max-h-[90vh] w-full max-w-6xl px-6 rounded-md scroll">
        <div className="pb-3 flex items-end justify-between">
          <div>
            <h1 className="text-white text-xl font-semibold">
              {activity.title}
            </h1>
            <h1 className="text-slate-400">{activity.date}</h1>
          </div>
          <div
            onClick={() => {
              navigate("/activities");
            }}
            className="w-7 h-7 bg-black text-white rounded-full opacity-70 inset-0 p-1 cursor-pointer hover:opacity-50"
          >
            <XMarkIcon />
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-lg">
          <img src={activity.img} alt={activity.title} />
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit, ea delectus possimus necessitatibus sed impedit,
            porro, voluptatum dolorem fugiat quidem veniam? Molestiae nisi,
            facere suscipit facilis, fugit eius temporibus mollitia obcaecati
            officia, qui beatae.
          </h1>
          <img src={activity.img} alt={activity.title} />
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit, ea delectus possimus necessitatibus sed impedit,
            porro, voluptatum dolorem fugiat quidem veniam? Molestiae nisi,
            facere suscipit facilis, fugit eius temporibus mollitia obcaecati
            officia, qui beatae.
          </h1>
          <img src={activity.img} alt={activity.title} />
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
        <div className="footer pt-2">
          <Footer fix={0} />
        </div>
      </div>
      <Up scrollRef={scrollRef} />
    </div>
  );
}
