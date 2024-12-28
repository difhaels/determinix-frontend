import React from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardShowCase from "../elements/CardShowCase";
import More from "../elements/More";


export default function Showcase() {
  // const project = projects ? projects.slice(0, 3) : [];
  return (
    <div>
      <Divider />
      <Title what={"Showcase"} />
      <div className="flex justify-center py-10 flex-wrap gap-3">
        {/* {project.map((project) => {
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
        })} */}
      </div>
      <More what={"Showcases"} where={"showcase"} />
    </div>
  );
}
