import React from "react";
import { MdOutlineStar } from "react-icons/md";
import "./movie-card.css";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const vote = movie.vote_average;
  return (
    <Link className="card" to={`/movie/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
        alt=""
      />
      <span className="vote">
        <div className="vote-number">{vote.toFixed(1)}</div>
      </span>
    </Link>
  );
};

export default MovieCard;
