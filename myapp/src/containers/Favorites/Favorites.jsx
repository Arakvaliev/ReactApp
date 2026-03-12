import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className={styles.wrapper}>
      {favorites.length !== 0 ? (
        favorites.map((item) => (
          <div className={styles.item} key={item.id}>
            <img className={styles.img} src={item.poster} alt="" />
            <div className={styles.name}>{item.name}</div>
          </div>
        ))
      ) : (
        <h4>Вы ничего не добавили в избранное...</h4>
      )}
    </div>
  );
};

export default Favorites;
