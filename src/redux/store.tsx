import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "../redux/movieList/movieListSlice";

export const store = configureStore({
  reducer: { movieData: movieListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
