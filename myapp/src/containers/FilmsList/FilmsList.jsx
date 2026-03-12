import { useState, useEffect } from "react";
import { getList as apiGetFilmsList } from "../../api/actions/films";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";

const params = {
  type: "FILM",
  yearFrom: "2020",
};

const FilmsList = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await apiGetFilmsList(params);
      console.log("Response from API:", response);
      setData(response.items);
    })();
  }, []);

  const onClick = (id) => {
    navigate("/film/" + id);
  };

  return (
    <div>
      <h1>Список фильмов</h1>
      <div className={styles.wrapper}>
        {data.length !== 0 &&
          data.map((item) => (
            <div key={item.kinopoiskId} className={styles.item}>
              <img className={styles.img} src={item.posterUrlPreview} alt="" />
              <div className={styles.name}>{item.nameRu}</div>
              <button onClick={() => onClick(item.kinopoiskId)}>
                Открыть фильм
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilmsList;
