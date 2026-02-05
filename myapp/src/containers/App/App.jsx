import Films from "../../components/Films"
import styles from './styles.module.css'
import { useState } from "react";

const filmsList = [
    {
        key:1,
        name: 'HarryPotter',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, totam? Molestiae, provident?
            Rem placeat consequatur vitae tenetur iusto pariatur, at corporis dolorem eligendi necessitatibus,
            obcaecati ullam enim dignissimos saepe natus!`,
        genre: 'Fantasy'
    },

    {
        key:2,
        name: 'LordOfTheRings',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, totam? Molestiae, provident?
            Rem placeat consequatur vitae tenetur iusto pariatur, at corporis dolorem eligendi necessitatibus,
            obcaecati ullam enim dignissimos saepe natus!`,
        genre: 'Fantasy'
    }
];

const App = () => {

    const [currentGenre, setCurrentGenre] = useState('All genres')

    const setGenre = (newGenre) => {
        setCurrentGenre(newGenre)
    }


    return (
        <>
            <button onClick={() => {setGenre('All genres')}}>All genres</button>
            <button onClick={() => {setGenre('Comedy')}}>Comedy</button>
            <button onClick={() => {setGenre('Fantasy')}}>Fantasy</button>

            <h3>{currentGenre}</h3>
            
            <Films>
                {
                    filmsList.filter(film => currentGenre == 'All genres' || film.genre == currentGenre)
                    .map(film => (
                        <div key = {film.key}>
                            <h2 className={styles.filmHeader}>{film.name}</h2>
                            <p>{film.description}</p>
                        </div>
                    ))
                }
            </Films>

            <div className={styles.picture}></div>
        </>
    )
}

export default App