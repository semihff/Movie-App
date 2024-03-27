import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const formOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${value}`);
  };
  return (
    <article>
      <img
        src={`https://image.tmdb.org/t/p/original/deLWkOLZmBNkm8p16igfapQyqeq.jpg`}
        alt=""
      />
      <form onSubmit={formOnSubmit}>
        <CiSearch size={40} className="search-icon" />

        <input
          placeholder="what do you watch today ?"
          type="text"
          value={value}
          onChange={(value) => setValue(value.target.value)}
        />
        <button>Search</button>
      </form>
      <section>
        <span className="movie-name">Damsel</span>
        <span className="movie-desc">
          Princess Elodie, görev bilinciyle yakışıklı bir prensle evlenmeyi
          kabul eder, ancak kraliyet ailesinin onu kadim bir borcu ödemek için
          kurban olarak seçtiğini öğrenir. Ateş püskürten bir ejderhayla
          birlikte bir mağaraya atılan genç prenses hayatta kalmak için zekasına
          ve iradesine güvenmek zorundadır.
        </span>
      </section>
    </article>
  );
};

export default Home;
