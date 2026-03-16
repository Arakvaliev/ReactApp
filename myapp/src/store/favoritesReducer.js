import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("favorites");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Ошибка загрузки из localStorage:", err);
    return [];
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favorites", serializedState);
  } catch (err) {
    console.error("Ошибка сохранения в localStorage:", err);
  }
};

const initialState = loadState();
export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    removeFromFavorites: (state, action) => {
      const newState = state.filter((el) => el.id !== action.payload);
      saveState(newState);
      return newState;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;