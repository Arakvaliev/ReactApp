import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const data = state.filter((el) => el.id !== action.payload);
      return [...data];
    },
  },
});

export const { addToFavorites, removeFromFavorites } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
