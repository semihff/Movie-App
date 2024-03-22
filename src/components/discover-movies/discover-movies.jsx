import React, { useState } from "react";
import { getMovies } from "../../db/movie";
import MovieCard from "../card/moive-card";
import "./discover-movies.css";

const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [err, setErr] = useState(null);

  useState(() => {
    setIsloading(true);
    try {
      const getDiscoverMovies = async () => {
        const res = await getMovies();
        const data = res.results;
        setMovies(data);
      };
      getDiscoverMovies();
    } catch (error) {
      setErr(error);
    }
  }, []);
  return (
    <div className="discover-movies">
      <h1>Discover</h1>
      <div className="card-wrapper">
        {movies.map((movie) => {
          if (!movie.poster_path) return;
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default DiscoverMovies;
