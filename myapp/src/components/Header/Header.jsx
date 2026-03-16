import { NavLink } from "react-router";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Button, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
  const setActiveClass = (statuses) => {
    if (statuses.isActive) {
      return styles.linkActive;
    }

    return styles.link;
  };

  const favorites = useSelector((state) => state.favorites);

  return (
    <div className={styles.wrapper}>
      <Button
        component={NavLink}
        to="/"
        className={setActiveClass}
        variant="outlined"
        size="small"
      >
        Главная
      </Button>
      
      <Button
        component={NavLink}
        to="/films"
        className={setActiveClass}
        variant="outlined"
        size="small"
      >
        Список фильмов
      </Button>
      
      <Button
        component={NavLink}
        to="/search"
        className={setActiveClass}
        variant="outlined"
        size="small"
      >
        Поиск
      </Button>
      
      <Badge
        badgeContent={favorites.length}
        color="error"
        overlap="rectangular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Button
          component={NavLink}
          to="/favorites"
          className={setActiveClass}
          variant="outlined"
          size="small"
          endIcon={<FavoriteIcon />}
        >
          Избранное
        </Button>
      </Badge>
    </div>
  );
};

export default Header;