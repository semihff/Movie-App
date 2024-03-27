import React, { useEffect, useRef, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import { getMoviesByCategoriesId } from "../db/get-genres-list";
import Navbar from "../components/navbar/navbar";
import ReactLoading from "react-loading";
import "./categories.css";
import BackArrow from "../components/back-button/back-arrow";
import MovieCard from "../components/card/moive-card";
import { useInView } from "react-intersection-observer";

const Categories = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setCategories([]);
    setPage(1);
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getMoiveByDetailsId = async () => {
        const data = await getMoviesByCategoriesId(id, page);
        setIsLoading(false);
        setCategories((prev) => [...prev, ...data.results]);
        console.log(page, id);
      };
      getMoiveByDetailsId();
    } catch (error) {
      setErr(error);
    } finally {
      setIsLoading(false);
    }
  }, [id, page]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <div className="categories-container">
        <BackArrow name={"Categories"} />
        <div className="card-wrapper">
          {isLoading ? (
            <ReactLoading
              type={"spin"}
              color={"gray"}
              height={667}
              width={375}
            />
          ) : (
            categories.map((movie) => {
              if (!movie?.poster_path) return;
              return (
                <MovieCard
                  movie={movie}
                  key={movie.id + id + Math.random() * 19}
                />
              );
            })
          )}
        </div>
      </div>
      <div ref={ref} className="loading-bar">
        <ReactLoading type={"spin"} color={"gray"} height={500} width={500} />
      </div>
    </div>
  );
};

export default Categories;
