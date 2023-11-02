import DishItem from '../DishItem/DishItem';
import styles from './styles.module.css';

const DishesList = ({ dishes }) => {
    return (
        <ul>
            {dishes.map((recipe, index) => (
                <DishItem dish={recipe} key={index} />
            ))
            }
            <button
                className={styles.btn}
                type='button'
            >Show more</button>
        </ul>
    )
};

export default DishesList;