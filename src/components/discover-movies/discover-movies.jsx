import React, { useEffect, useState } from "react";
import { getMovies } from "../../db/movie";
import MovieCard from "../card/moive-card";
import "./discover-movies.css";
import { useInView } from "react-intersection-observer";
import ReactLoading from "react-loading";
import { ScrollRestoration } from "react-router-dom";
const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [err, setErr] = useState(undefined);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  useEffect(() => {
    setIsloading(true);
    const getDiscoverMovies = async () => {
      try {
        const res = await getMovies(page);
        if (!res.results) {
          throw new Error("Başka sayfa bulunmadı.");
        }
        const data = res?.results;
        console.log(data);
        setMovies((prev) => [...prev, ...data]);
        setIsloading(false);
      } catch (error) {
        setErr(error.message);
      } finally {
        setIsloading(false);
      }
    };
    getDiscoverMovies();
  }, [page]);

  return (
    <div className="discover-movies">
      <ScrollRestoration />

      <h1>Discover</h1>
      <div className="card-wrapper">
        {movies.map((movie) => {
          if (!movie.poster_path) return;
          return (
            <MovieCard movie={movie} key={movie.id + Math.random() * 500} />
          );
        })}
      </div>
      {err === undefined && (
        <div ref={ref} className="loading-bar">
          <ReactLoading type={"spin"} color={"gray"} height={500} width={500} />
        </div>
      )}
      {err && <div className="hata-mesaj">{err}</div>}
    </div>
  );
};

export default DiscoverMovies;
