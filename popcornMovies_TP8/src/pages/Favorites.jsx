import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import MovieCard from "../components/MovieCard";
import "./Favorites.css";

const Favorites = ({ favorites, toggleFavorite }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    setFavoriteMovies(favorites);
  }, [favorites]);

  const removeFavorite = (movie) => {
    toggleFavorite(movie);
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== movie.id)
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(favoriteMovies);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFavoriteMovies(items);
  };

  return (
    <div className="container">
      <h2 className="title">Filmes Favoritos:</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="favorites">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="movies-container">
              {favoriteMovies.length > 0 ? (
                favoriteMovies.map((movie, index) => (
                  <Draggable key={movie.id} draggableId={String(movie.id)} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="movie-card"
                      >
                        <MovieCard movie={movie} showLink={false} />
                        <button onClick={() => removeFavorite(movie)}>
                          Remover dos Favoritos
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <p>Nenhum filme favorito adicionado.</p>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Favorites;
