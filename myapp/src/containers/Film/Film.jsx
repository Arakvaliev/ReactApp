import { useState, useEffect } from "react";
import { get } from "../../api/actions/films";
import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favoritesReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Typography,
  Paper,
  Box,
  IconButton,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Film = () => {
  const [data, setData] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    (async () => {
      const response = await get(params.id);
      console.log("Response from API:", response);
      setData(response);
    })();
  }, [params.id]);

  useEffect(() => {
    const favoriteFilms = favorites.filter(
      (item) => item.id === data.kinopoiskId,
    );
    setIsFavorite(Boolean(favoriteFilms.length));
  }, [data.kinopoiskId, favorites]);

  const onClose = () => {
    navigate(-1);
  };

  const onFavoritesAdd = () => {
    dispatch(
      addToFavorites({
        id: data.kinopoiskId,
        name: data.nameRu,
        poster: data.posterUrl,
      }),
    );
  };

  const onFavoritesRemoved = () => {
    dispatch(removeFromFavorites(data.kinopoiskId));
  };

  return (
    <Box className={styles.wrapper}>
      {data && (
        <Paper elevation={3} className={styles.paper}>
          <Box className={styles.header}>
            <IconButton onClick={onClose} color="primary" aria-label="назад">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" component="h1" className={styles.title}>
              {data.nameRu}
            </Typography>
            <IconButton
              onClick={isFavorite ? onFavoritesRemoved : onFavoritesAdd}
              color={isFavorite ? "error" : "default"}
              aria-label={isFavorite ? "удалить из избранного" : "добавить в избранное"}
            >
              {isFavorite ? <CloseIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>

          <Box className={styles.content}>
            <img className={styles.img} src={data.posterUrl} alt={data.nameRu} />
            
            <Box className={styles.info}>
              <Typography variant="body1">
                {data.description}
              </Typography>
              
              <Button
                component={Link}
                href={"https://kinopoiskapiunofficial.tech/api/v2.2/films/" + params.id}
                target="_blank"
                variant="contained"
                color="primary"
                endIcon={<OpenInNewIcon />}
                className={styles.linkButton}
              >
                Открыть на Кинопоиске
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Film;