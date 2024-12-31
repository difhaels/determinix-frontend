import React, { useEffect, useState } from "react";
import Divider from "../elements/Divider";
import Title from "../elements/Title";
import CardActivities from "../elements/CardActivities";
import More from "../elements/More";

export default function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/activities")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      });
  }, []);
const activitiySlice = activities.slice(0,3);
  return (
    <div>
      <Divider />
      <Title what={"Activities"} />
      <div className="flex flex-wrap justify-center py-5">
        {activitiySlice.map((activity) => {
          return (
            <CardActivities
              key={activity._id}
              id={activity._id}
              date={activity.date}
              img={activity.img}
              full={false}
            />
          );
        })} 
      </div>
      <More what={"Activities"} where={"activities"} />
    </div>
  );
}
