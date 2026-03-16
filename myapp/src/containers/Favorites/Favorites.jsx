import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";
import { Typography, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const navigate = useNavigate();

  const handleFilmClick = (id) => {
    navigate("/film/" + id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h4" component="h1">
          Избранное
        </Typography>
        {favorites.length > 0 && (
          <Typography variant="subtitle1" color="textSecondary">
            <FavoriteIcon color="error" fontSize="small" className={styles.headerIcon} />
            {favorites.length} {favorites.length === 1 ? 'фильм' : 
              favorites.length < 5 ? 'фильма' : 'фильмов'}
          </Typography>
        )}
      </div>

      <div className={styles.wrapper}>
        {favorites.length !== 0 ? (
          favorites.map((item) => (
            <Paper
              key={item.id}
              className={styles.item}
              elevation={2}
              onClick={() => handleFilmClick(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleFilmClick(item.id);
                }
              }}
            >
              <img 
                className={styles.img} 
                src={item.poster} 
                alt={item.name}
              />
              <div className={styles.name}>{item.name}</div>
            </Paper>
          ))
        ) : (
          <Paper elevation={1} className={styles.emptyState}>
            <FavoriteIcon color="disabled" fontSize="large" />
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Вы ничего не добавили в избранное...
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Нажмите на сердечко на странице фильма, чтобы добавить его сюда
            </Typography>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default Favorites;