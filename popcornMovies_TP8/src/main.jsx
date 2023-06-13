import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

import "./index.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      setFavorites(updatedFavorites);
    } else {
      setFavorites([...favorites, movie]);
    }
  };
  return (
    <Router>
      <nav className="navbar">
        <h2>
          <Link to="/">PopcornMovies</Link>
        </h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Pesquisar</Link>
          </li>
          <li>
            <Link to="/favorites">Filmes Favoritos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
