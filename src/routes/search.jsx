import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { getMoviesByName } from "../db/movie";
import MovieCard from "../components/card/moive-card";
import ReactLoading from "react-loading";
import "./search.css";
import BackArrow from "../components/back-button/back-arrow";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const movieName = searchParams.get("query");

  useEffect(() => {
    setIsLoading(true);
    try {
      const getMovies = async () => {
        const data = await getMoviesByName(movieName);
        setMovies(data.results);
        setIsLoading(false);
        console.log(data.results);
      };
      getMovies();
    } catch (error) {
      setErrors(error);
    }
  }, []);
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
              return <MovieCard movie={movie} key={movie.id} />;
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
