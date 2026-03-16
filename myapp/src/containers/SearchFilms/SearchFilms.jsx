import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { search as apiSearchFilms } from "../../api/actions/films";
import UiSearchInput from "../../ui-kit/UiSearchInput";
import styles from "./styles.module.css";

const SearchFilms = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const searchFilms = async () => {
      if (value.trim().length === 0) {
        setData([]);
        return;
      }

      const params = {
        keyword: value,
      };

      const response = await apiSearchFilms(params);
      console.log("Response from API:", response);
      setData(response.films || []);
    };

    const debounceTimer = setTimeout(searchFilms, 500);
    return () => clearTimeout(debounceTimer);
  }, [value]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleFilmClick = (id) => {
    navigate("/film/" + id);
  };

  return (
    <div className={styles.container}>
      <h1>Поиск фильмов</h1>
      
      <UiSearchInput
        value={value}
        onChange={onChange}
        placeholder="Введите название фильма..."
        size="medium"
      />

      {value.trim().length > 0 && (
        <div className={styles.wrapper}>
          {data.length === 0 ? (
            <div className={styles.noResults}>Фильмы не найдены</div>
          ) : (
            data.map((item) => (
              <div
                key={item.filmId}
                className={styles.item}
                onClick={() => handleFilmClick(item.filmId)}
              >
                <img
                  className={styles.img}
                  src={item.posterUrlPreview}
                  alt={item.nameRu}
                />
                <div className={styles.name}>{item.nameRu}</div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilms;