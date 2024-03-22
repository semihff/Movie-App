import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ id, name }) => {
  return (
    <ul className="genres">
      <li>
        <Link className="genres-name" to={`/${id}`}>
          {name}
        </Link>
      </li>
    </ul>
  );
};

export default NavbarItem;
