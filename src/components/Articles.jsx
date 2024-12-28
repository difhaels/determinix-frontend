import React from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardArticles from "../elements/CardArticles";
import More from "../elements/More";

import { Link } from "react-router-dom";

export default function Articles() {
  // const topArticles = articles.find((article) => article.id === 800001);

  // const article = articles.slice(0, 3);

  return (
    <div>
      <Divider />
      <Title what={"Articles"} />
      <div className="py-5 flex justify-center">
        <div className="px-2 py-2 hidden lg:block">
          <div className="w-[30rem]">
            {/* <img
              src={topArticles.img}
              alt={topArticles.title}
              className="w-full h-full "
            /> */}
          </div>
          {/* <div className="w-96 px-2">
            <h1 className="text-base underline text-slate-600">
              {topArticles.type}
            </h1>
            <h1 className="text-sm text-slate-600">{topArticles.date}</h1>
            <h1 className="text-base font-medium">{topArticles.title}</h1>
            <h1 className="text-sm text-slate-600">{topArticles.writer}</h1>
            <h1>{topArticles.short}</h1>
            <Link
              to={`/showcase/${topArticles.id}`}
              className="text-sm text-sky-500 hover:text-sky-300"
            >
              Read More
            </Link>
          </div> */}
        </div>
        <div>
          {/* {article.map((article) => {
            return (
              <CardArticles
                id={article.id}
                writer={article.writer}
                date={article.date}
                title={article.title}
                type={article.type}
                short={article.short}
                img={article.img}
              />
            );
          })} */}
        </div>
      </div>
      <More what={"Articles"} where={"articles"} />
    </div>
  );
}
