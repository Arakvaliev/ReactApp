import { useState, useEffect } from "react";
import { search as apiSearchFilms } from "../../api/actions/films";
import styles from "./styles.module.css";

const SearchFilms = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const params = {
        keyword: value,
      };

      const response = await apiSearchFilms(params);
      console.log("Response from API:", response);
      setData(response.films);
    })();
  }, [value]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Поиск фильмов</h1>
      <input type="text" onChange={onChange} value={value} />

      <div className={styles.wrapper}>
        {data.length !== 0 &&
          data.map((item) => (
            <div key={item.filmId} className={styles.item}>
              <img className={styles.img} src={item.posterUrlPreview} alt="" />
              <div className={styles.name}>{item.nameRu}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchFilms;
