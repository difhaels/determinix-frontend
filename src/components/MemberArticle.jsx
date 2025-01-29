import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardArticles from "../elements/CardArticles";

export default function MemberShowcase() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [person, setPerson] = useState({});

  const { id } = useParams();
  // panggil member
  useEffect(() => {
    fetch(`http://localhost:5000/members/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
      })
      .catch(() => {
        navigate("/server-down");
      });
  }, [id, navigate]);

  const [article, setArticle] = useState([]);
  // panggil project by member
  useEffect(() => {
    fetch(`http://localhost:5000/articles/ma/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticle(data);
      });
  }, [id, navigate]);

  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="pt-32 text-lg font-semibold">
        <h1 className="px-5 lg:px-16">Article by {person.name}</h1>
        <div className="flex justify-center py-10 flex-wrap gap-3">
          {article.map((article) => {
            return (
              <CardArticles
                full={1}
                key={article._id}
                id={article._id}
                writer={article.writer.name} // ambil dari objek writer
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
      <div className="footer">
        <Footer fix={0} />
      </div>
    </div>
  );
}
