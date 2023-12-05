import DishItem from '../DishItem/DishItem';
import styles from './styles.module.css'

const DishesList = ({ dishes }) => {
    return (
        <ul className={styles.dishList}>
            {dishes.map((recipe, index) => (
                <DishItem dish={recipe} key={index} />
            ))
            }
        </ul>
    )
};

export default DishesList;