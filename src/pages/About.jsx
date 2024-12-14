import React, { useEffect, useState } from "react";
import "../css/output.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../elements/PageTilte";

import CardMember from '../components/CardMember'

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const members = [
    {name: "Agung Saputra", j:"The Strongest",att: 1},
    {name: "Aru Chevy Rasyid", j:"Not Set",att: 0},
    {name: "Beni Maryana", j:"Not Set",att: 0},
    {name: "Chandra Hadi Ramadhan", j:"Not Set",att: 0},
    {name: "Dian Rivanno", j:"Not Set",att: 0},
    {name: "Krisna Setyo Ramadhan", j:"Not Set",att: 0},
    {name: "Salsabil Albi Fahri", j:"Not Set",att: 0},
    {name: "Wisnu Hartono", j:"Not Set",att: 0},
  ]
  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="bg-gradient-to-b from-rose-200 to-white">
        <PageTitle what={"About"} />
        <div className="flex justify-center pt-5">
          <h1 className="px-[20rem] text-justify">
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
        <div className="px-[20rem]">
          <h1 className="font-semibold italic pt-4 pb-2">Member</h1>
          <div className="grid grid-cols-3 justify-center gap-3">
            {members.map((member) => {
              return <CardMember name={member.name} j={member.j} att={member.att}/>
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
