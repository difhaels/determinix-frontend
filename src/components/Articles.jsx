import React, { useEffect, useState } from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardArticles from "../elements/CardArticles";
import More from "../elements/More";

import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => {
        setTopArticles(data[0]);
      });
  });

  const articleSlice = articles.slice(0, 3);

  return (
    <div>
      <Divider />
      <Title what={"Articles"} />
      <div className="py-5 flex justify-center">
        <div className="px-2 py-2 hidden lg:block">
          <div className="w-[30rem]">
            <img
              src={topArticles.img}
              alt={topArticles.title}
              className="w-full h-full "
            />
          </div>
          <div className="w-96 px-2">
            <h1 className="text-base underline text-slate-600">
              {topArticles.type}
            </h1>
            <h1 className="text-sm text-slate-600">{topArticles.date}</h1>
            <h1 className="text-base font-medium">{topArticles.title}</h1>
            <h1 className="text-sm text-slate-600">{topArticles.writer?.name}</h1>
            <h1>{topArticles.short}</h1>
            <Link
              to={`/showcase/${topArticles.id}`}
              className="text-sm text-sky-500 hover:text-sky-300"
            >
              Read More
            </Link>
          </div>
        </div>
        <div>
          {articleSlice.map((article) => {
            return (
              <CardArticles
                key={article._id}
                id={article._id}
                date={article.date}
                title={article.title}
                type={article.type}
                short={article.short}
                img={article.img}
              />
            );
          })}
        </div>
      </div>
      <More what={"Articles"} where={"articles"} />
    </div>
  );
}
