import React from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> PopcornMovies
        </Link>
      </h2>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="nav-link">
            Pesquisar
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="nav-link">
            Filmes Favoritos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;