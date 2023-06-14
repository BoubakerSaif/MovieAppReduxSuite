import { createSlice } from "@reduxjs/toolkit";
import Data from "../Components/Data";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: Data },
  reducers: {
    addMovie: (state, { payload }) => {
      //   state.movies = [...state.movies, payload];
      state.movies.push(payload);
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((el) => el.id !== action.payload);
    },
    UpdateMovie: (state, action) => {
      state.movies = state.movies.map((el) =>
        el.id === action.payload.id ? (el = action.payload.updatedMovie) : el
      );
    },
  },
});

export default movieSlice.reducer;

export const { addMovie, deleteMovie, UpdateMovie } = movieSlice.actions;
