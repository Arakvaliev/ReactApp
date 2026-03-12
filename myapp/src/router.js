import App from "./containers/App";
import FilmsList from "./containers/FilmsList";
import SearchFilms from "./containers/SearchFilms";
import "./styles/styles.css";
import { createBrowserRouter } from "react-router";
import Home from "./containers/Home/Home";
import Film from "./containers/Film";
import Favorites from "./containers/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "films",
        Component: FilmsList,
      },
      {
        path: "search",
        Component: SearchFilms,
      },
      {
        path: "film/:id",
        Component: Film,
      },
      {
        path: "favorites",
        Component: Favorites,
      },
    ],
  },
]);
