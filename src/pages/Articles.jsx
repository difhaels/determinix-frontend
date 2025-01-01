import React, { useEffect, useState } from "react";
import "../css/output.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../elements/PageTilte";
import CardArticles from "../elements/CardArticles";
import { useNavigate } from "react-router-dom";

export default function Articles() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [articles, setArticles] = useState([]); // State untuk artikel
  const [type, setType] = useState(""); // State untuk type yang dipilih

  // Fetch artikel berdasarkan tipe (pada awalnya akan mengambil semua artikel)
  useEffect(() => {
    fetchArticles(type); // Panggil fetchArticles saat komponen pertama kali dimuat
  }, [type]); // Menambahkan `type` ke dalam dependency array agar fetch terjadi saat `type` berubah

  // Fungsi untuk menangani perubahan pada dropdown
  const handleSelectChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType); // Update state dengan nilai yang dipilih
  };

  // Fungsi untuk melakukan fetch artikel berdasarkan tipe
  const fetchArticles = (selectedType) => {
    const url = selectedType ? `http://localhost:5000/article/type/${selectedType}` : "http://localhost:5000/articles"; // Jika tidak ada tipe, ambil semua artikel
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data); // Update state dengan data yang diterima
      })
      .catch(() => {
        navigate("/server-down"); // Redirect jika terjadi error
      });
  };

  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="bg-gradient-to-b from-yellow-300 to-white">
        <PageTitle what={"Articles"} />
        <form className="px-4 lg:px-16 flex gap-2 items-center pt-10" action="">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            className="rounded-sm px-2 py-1"
            value={type} // Bind state dengan nilai yang dipilih
            onChange={handleSelectChange} // Handle perubahan nilai dropdown
          >
            <option value="">All</option>
            <option value="general">General</option>
            <option value="nothing">Nothing</option>
          </select>
        </form>

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
