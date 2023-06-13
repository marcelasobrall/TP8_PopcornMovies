import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./Search.css";

const apiKey = "9f97a3f22607f49aa0ce10d046c15914";
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const searchWithQueryURL = `${searchURL}&query=${searchQuery}`;
    navigate(`/search?q=${searchQuery}`);
    fetch(searchWithQueryURL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="container">
    <h2 className="title">
      Resultados para: <span className="query-text">{searchQuery}</span>
    </h2>
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Digite o nome do filme"
      />
      <button className="search-button" onClick={handleSearch}>
        Pesquisar
      </button>
    </div>
    <div className="movies-container">
      {movies.length > 0 &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  </div>
);
};

export default Search;

