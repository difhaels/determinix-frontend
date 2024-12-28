import React from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardActivities from "../elements/CardActivities";
import More from "../elements/More";

export default function Activities() {

  // const activitiy = activities.slice(0,3);
  return (
    <div>
      <Divider />
      <Title what={"Activities"} />
      <div className="flex flex-wrap justify-center py-5">
        {/* {activitiy.map((activity) => {
          return (
            <CardActivities
              id={activity.id}
              date={activity.date}
              img={activity.img}
              full={false}
            />
          );
        })} */}
      </div>
      <More what={"Activities"} where={"activities"} />
    </div>
  );
}
