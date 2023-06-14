import React, { useState } from "react";
import "./App.css";
import AddMovies from "./Components/AddMovies";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import { useSelector } from "react-redux";

function App() {
  const { movies } = useSelector((state) => state.movie);

  return (
    <div className="App">
      {/* <Filter setsearch={setSearch} setrating={setRating} /> */}
      <br />
      <AddMovies />

      <MovieList Data={movies} />
    </div>
  );
}

export default App;
