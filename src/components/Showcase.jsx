import React from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardShowCase from "../elements/CardShowCase";
import More from "../elements/More";

import { projects } from "../test/constant";

export default function Showcase() {
  return (
    <div>
      <Divider />
      <Title what={"Showcase"} />
      <div className="flex justify-center py-10 flex-wrap gap-3">
        {projects.map((project) => {
          return (
            <CardShowCase
              key={project.id}
              id={project.id}
              title={project.title}
              date={project.date}
              members={project.members}
              img={project.img}
              full={true}
            />
          );
        })}
      </div>
      <More what={"Showcases"} where={"showcase"} />
    </div>
  );
}
