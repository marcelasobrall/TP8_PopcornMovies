import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const apiKey = "9f97a3f22607f49aa0ce10d046c15914";
const moviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

const Home = ({ favorites, toggleFavorite }) => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const res = await fetch(moviesURL);
      const data = await res.json();
      setTopMovies(data.results);
    };

    getTopRatedMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              showLink={true}
              addToFavorites={toggleFavorite}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
