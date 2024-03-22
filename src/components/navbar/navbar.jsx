import React, { useEffect, useState } from "react";
import "./navbar.css";
import NavbarItem from "./navbar-item";
import { getGenresList } from "../../db/get-genres-list";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [genres, setGenres] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();

  const returnHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  useEffect(() => {
    setIsLoading(true);
    try {
      const getGenres = async () => {
        const data = await getGenresList();
        setGenres(data.genres);
        setIsLoading(false);
      };
      getGenres();
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  if (!genres) return;
  return (
    <aside>
      <div className="logo-side">
        <div onClick={returnHome} className="logo-wrapper">
          <FaPlay size={30} />
        </div>
      </div>
      <nav>
        {genres?.map((item) => (
          <NavbarItem id={item.id} name={item.name} key={item.id} />
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;
