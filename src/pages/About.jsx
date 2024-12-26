import React, { useEffect, useState } from "react";
import "../css/output.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../elements/PageTilte";

import CardMember from "../components/CardMember";
import { members } from "../test/constant";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  useEffect(() => {
    fetch("/test")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div>
        {typeof backendData.users === "undefined" ? (
          <p>loading....</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
      <div className="bg-gradient-to-b from-rose-200 to-white">
        <PageTitle what={"About"} />
        <div className="flex justify-center pt-7">
          <h1 className="lg:px-[20rem] px-6 text-justify">
            <span className="font-bold text-xl italic">
              DETERMINI<span className="text-red-600">X </span>
            </span>
            is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit velit laudantium autem est voluptas culpa qui quibusdam
            nemo voluptatum odio tempore id, architecto vel nesciunt debitis,
            excepturi et atque! Voluptatibus sed vel modi obcaecati, non
            deserunt et distinctio velit unde esse quae doloremque accusamus?
            Eos error dignissimos vel, id ad saepe unde dolores nemo? Similique
            ipsam minima provident deserunt voluptates natus error at dolor
            quisquam accusamus, ut voluptatum voluptas ullam non facere?
            Adipisci quis a, placeat praesentium nemo, blanditiis veritatis hic
            velit, impedit excepturi nisi. Assumenda, optio eum sunt ab maiores
            velit, provident culpa et, quis a possimus suscipit quibusdam!
          </h1>
        </div>
        <div className="lg:px-[20rem] px-6">
          <h1 className="font-semibold italic pt-4 pb-2">Member</h1>
          <div className="lg:grid lg:grid-cols-3 justify-center gap-3">
            {members.map((member) => {
              return (
                <CardMember
                  key={member.id}
                  id={member.id}
                  name={member.name}
                  j={member.j}
                  img={member.img}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer pt-16">
        <Footer fix={0} />
      </div>
    </div>
  );
}
