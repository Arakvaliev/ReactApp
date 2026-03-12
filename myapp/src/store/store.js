import { configureStore } from "@reduxjs/toolkit";
import FavoritesReducer from "./favoritesReducer";

export const store = configureStore({
  reducer: {
    favorites: FavoritesReducer,
  },
});
