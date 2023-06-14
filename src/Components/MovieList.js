import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ Data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {Data.map((el) => {
        return <MovieCard movieInfo={el} />;
      })}
    </div>
  );
};

export default MovieList;
