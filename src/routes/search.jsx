import React, { useEffect, useState } from "react";
import {
  ScrollRestoration,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { getMoviesByName } from "../db/movie";
import MovieCard from "../components/card/moive-card";
import ReactLoading from "react-loading";
import "./search.css";
import BackArrow from "../components/back-button/back-arrow";
import { useInView } from "react-intersection-observer";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [page, setPage] = useState(1);
  const movieName = searchParams.get("query");
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const data = await getMoviesByName(movieName, page);
        console.log(data, "1ıuıuuoııuu");
        if (data.success === false) {
          throw new Error(data.status_message);
        }
        setMovies((prev) => [...prev, ...data.results]);
        setIsLoading(false);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [page]);
  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);
  return (
    <div className="search-wrapper">
      <Navbar />
      <main>
        <BackArrow name={"Search Result"} />
        <div className="card-wrapper">
          {isLoading ? (
            <ReactLoading
              type={"spin"}
              color={"gray"}
              height={667}
              width={375}
            />
          ) : (
            movies.map((movie) => {
              if (!movie.poster_path) return;
              return (
                <MovieCard movie={movie} key={movie.id + Math.random() * 500} />
              );
            })
          )}
        </div>
      </main>
      {movies.length !== 0 && errors === null && (
        <div ref={ref} className="loading-bar">
          <ReactLoading type={"spin"} color={"gray"} height={200} width={200} />
        </div>
      )}
      {errors && (
        <div style={{ paddingLeft: "15rem", fontSize: "2rem" }}>{errors}</div>
      )}
    </div>
  );
};

export default Search;
