import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetailsById } from "../../db/movie";
import Navbar from "../navbar/navbar";
import "./movie-details.css";
import Actors from "../actors/actor";
import { FaStar } from "react-icons/fa";
import { ScrollRestoration } from "react-router-dom";
import BackArrow from "../back-button/back-arrow";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [selected, setSelected] = useState("details");
  const vote = movie?.vote_average?.toFixed(1);
  useEffect(() => {
    setIsLoading(true);
    try {
      const getDetailsMovie = async () => {
        const data = await getMovieDetailsById(id);
        setMovie(data);
        console.log(data);
      };
      getDetailsMovie();
    } catch (error) {
      setErr(error);
    }
  }, []);
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <div className="details-wrapper">
        <div className="background">
          <div className="back-arrow">
            <BackArrow name={"Detaylar"} />
          </div>

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
            {selected === "details" ? (
              <div className="movie-info">
                <span>
                  Açıklama :{" "}
                  {movie.overview
                    ? movie.overview
                    : "Bu film hakkında bir açıklama bulunamadı."}
                </span>
                <span className="release-date">
                  Çıkış Tarihi :{" "}
                  <span>
                    {movie.release_date
                      ? movie.release_date
                      : "Bu filmin çıkış tarihi bulunamadı"}
                  </span>
                </span>
                <span className="movie-genres">
                  Tür :{" "}
                  <div className="genres">
                    {movie.genres?.map((genre) => (
                      <Link
                        style={{ color: "gray", textDecoration: "none" }}
                        to={`/${genre.id}`}
                        key={genre.id}
                      >
                        <div className="genre">{genre.name}</div>
                      </Link>
                    ))}
                  </div>
                </span>
                <span className="vote-avg">
                  Puan : {""}
                  <div>
                    <FaStar color="yellow" size={40} /> <span>{vote}</span>
                  </div>
                </span>

                <span className="more-info">
                  Daha fazla bilgi için tıklayın
                  <a
                    target="_blank"
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                      alt=""
                    />
                  </a>
                </span>
              </div>
            ) : (
              <Actors id={movie.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
