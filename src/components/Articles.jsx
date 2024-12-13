import React from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardArticles from "../elements/CardArticles";
import More from "../elements/More";
import lepy from "../assets/lepy.png";

export default function Articles() {
  return (
    <div>
      <Divider />
      <Title what={"Articles"} />
      <div className="py-5 flex justify-center">
        <div>
          <div className="px-2 py-2">
            <div className="w-[30rem]">
              <img src={lepy} alt="a" className="w-full h-full " />
            </div>
            <div className="w-96 px-2">
              <h1 className="text-base underline text-slate-600">GENERAL</h1>
              <h1 className="text-sm text-slate-600">June 19, 2024</h1>
              <h1 className="text-base font-medium">Articles 01</h1>
              <h1 className="text-sm text-slate-600">Agung Saputra</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem a voluptas, dicta ex reprehenderit ullam?
              </h1>
              <a href="#" className="text-sm text-sky-500">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div>
          <CardArticles />
          <CardArticles />
          <CardArticles />
        </div>
      </div>
      <More what={"Articles"} where={"articles"} />
    </div>
  );
}
