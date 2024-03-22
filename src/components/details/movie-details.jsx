import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailsById } from "../../db/movie";
import Navbar from "../navbar/navbar";
import "./movie-details.css";
import { getActorByMovieId } from "../../db/actor";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [selected, setSelected] = useState("details");

  useEffect(() => {
    setIsLoading(true);
    try {
      const getDetailsMovie = async () => {
        const data = await getMovieDetailsById(id);
        setMovie(data);
      };
      getDetailsMovie();
    } catch (error) {
      setErr(error);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="details-wrapper">
        <div className="background">
          <img
            className="background-image"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          />
          <div className="poster">
            <div className="poster-img">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className="movie-tag">
              <span className="title">{movie.original_title}</span>
              <span className="tagline">{movie.tagline}</span>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="options">
            <span
              onClick={() => setSelected("details")}
              className={
                selected === "details"
                  ? "detail-name border"
                  : "detail-name unselected-color"
              }
            >
              Detaylar
            </span>
            <span
              onClick={() => setSelected("actors")}
              className={
                selected === "actors"
                  ? "actors border"
                  : "actors unselected-color"
              }
            >
              Oyuncular
            </span>
          </div>
          <div className="details-section">
            {selected === "details" ? <div>sa</div> : <Actors />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
