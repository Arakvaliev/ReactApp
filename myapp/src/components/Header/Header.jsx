import { NavLink } from "react-router";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const setActiveClass = (statuses) => {
    if (statuses.isActive) {
      return styles.linkActive;
    }

    return styles.link;
  };

  const Favorites = useSelector((state) => state.favorites);

  return (
    <div className={styles.wrapper}>
      <NavLink className={setActiveClass} to="/">
        Главная
      </NavLink>
      <NavLink className={setActiveClass} to="/films">
        Список фильмов
      </NavLink>
      <NavLink className={setActiveClass} to="/search">
        Поиск
      </NavLink>
      <NavLink className={setActiveClass} to="/favorites">
        Избранное - {Favorites.length}
      </NavLink>
    </div>
  );
};

export default Header;
