import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./movieSlice";
const store = configureStore({
  reducer: {
    movie: MovieReducer,
  },
});

export default store;
