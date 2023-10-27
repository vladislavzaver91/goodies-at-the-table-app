import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const RecipesList = ({ recipes }) => {
    const navigate = useNavigate();

    return (
        <ul className={styles.list}>
            {recipes.map(recipe => (
                <li
                    key={recipe.idMeal}
                    onClick={() => {navigate(`/${recipe.idMeal}`)}}
                    className={styles.item}
                >
                    <img src={recipe.strMealThumb} alt="" width={403} height={322} />
                    <div className={styles.wrapper}>
                        <h3 className={styles.titleItem}>
                            {recipe.strMeal}
                        </h3>
                        <p className={styles.text}>
                            A great recipe to have breakfast with friends in the morning.
                        </p>
                        <button className={styles.btn}>
                            View recipe
                        </button>
                    </div>
                </li>
            ))
            }</ul>
    )
};

export default RecipesList;