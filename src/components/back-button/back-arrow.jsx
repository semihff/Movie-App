import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./back-arrow.css";
const BackArrow = ({ name }) => {
  const navigate = useNavigate();
  const returnHome = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className="search-bar">
      <IoIosArrowBack
        onClick={returnHome}
        className="back"
        size={75}
        color="#e8317e"
      />
      <span>{name}</span>
    </div>
  );
};

export default BackArrow;
