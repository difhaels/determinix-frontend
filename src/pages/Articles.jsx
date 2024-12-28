import React, { useEffect, useState } from "react";
import "../css/output.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../elements/PageTilte";
import CardArticles from "../elements/CardArticles";

export default function Articles() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [articles, setArticles] = useState([]);
  // panggil articles
  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="bg-gradient-to-b from-yellow-300 to-white">
        <PageTitle what={"Articles"} />
        <div className="flex justify-center pt-10 gap-3 flex-wrap">
          {Array.isArray(articles) && articles.length > 0 ? (
            articles.map((article) => (
              <CardArticles
                id={article._id}
                key={article._id}
                writer={article.writer.name}
                date={article.date}
                title={article.title}
                type={article.type}
                short={article.short}
                img={article.img}
                full={true}
              />
            ))
          ) : (
            <p>Loading articles...</p>
          )}
        </div>
      </div>
      <div className="footer pt-16">
        <Footer fix={false} />
      </div>
    </div>
  );
}
