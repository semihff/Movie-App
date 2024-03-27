import React, { useEffect, useState } from "react";
import { getActorsByMovieId } from "../../db/actor";
import "./actor.css";

const Actors = ({ id }) => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    try {
      const getActors = async () => {
        const data = await getActorsByMovieId(id);
        setActors(data.cast);
        console.log(data.cast);
      };
      getActors();
    } catch (error) {
      setErr(error);
    }
  }, []);
  return (
    <div className="actor-wrapper">
      {actors.map((actor) => {
        if (!actor.profile_path) return;
        return (
          <div className="actor">
            <img
              src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
              alt=""
            />
            <span className="char-name">{actor.character}</span>
            <span className="org-name">" {actor.original_name} "</span>
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
