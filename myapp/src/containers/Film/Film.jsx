import { useState, useEffect } from "react";
import { get } from "../../api/actions/films";
import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favoritesReducer";
import { useDispatch, useSelector } from "react-redux";

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
    <div className={styles.wrapper}>
      {data && (
        <div>
          <div>{data.nameRu}</div>
          <img className={styles.img} src={data.posterUrl} alt="" />
          <p>{data.description}</p>
          <a
            href={
              "https://kinopoiskapiunofficial.tech/api/v2.2/films/" + params.id
            }
            target="_blank"
          >
            Ссылка на кинопоиск
          </a>
          <button onClick={onClose}>Назад</button>

          {isFavorite ? (
            <button onClick={onFavoritesRemoved}>Удалить из избранного</button>
          ) : (
            <button onClick={onFavoritesAdd}>Добавить в избранное</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Film;
