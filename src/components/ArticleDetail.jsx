import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/solid";

import Up from "../elements/Up";
import Footer from "./Footer";

export default function ArticleDetail() {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [article, setArticle] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:5000/articles/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log("ini bang ", data)
      setArticle(data);
    });
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div
      ref={scrollRef}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70  overflow-auto"
    >
      <div className="max-h-[90vh] w-full max-w-6xl px-6 rounded-md scroll">
        <div className="pb-3 flex items-end justify-between">
          <div>
            <h1 className="text-white text-xl font-semibold">
              {article.title} |{" "}
              <span className="text-blue-500 cursor-pointer">
                {article.type}
              </span>
            </h1>
            <h1 className="text-slate-400 text-xs">{article.date}</h1>
            <h1 className="text-slate-400 text-sm">By {article.writer?.name}</h1>
          </div>
          <div
            onClick={() => {
              navigate("/articles");
            }}
            className="w-7 h-7 bg-black text-white rounded-full opacity-70 inset-0 p-1 cursor-pointer hover:opacity-50"
          >
            <XMarkIcon />
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-lg">
          <img src={article.img} alt={article.title} />
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit, ea delectus possimus necessitatibus sed impedit,
            porro, voluptatum dolorem fugiat quidem veniam? Molestiae nisi,
            facere suscipit facilis, fugit eius temporibus mollitia obcaecati
            officia, qui beatae.
          </h1>
          <img src={article.img} alt={article.title} />
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit, ea delectus possimus necessitatibus sed impedit,
            porro, voluptatum dolorem fugiat quidem veniam? Molestiae nisi,
            facere suscipit facilis, fugit eius temporibus mollitia obcaecati
            officia, qui beatae.
          </h1>
          <img src={article.img} alt={article.title} />
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
