import { IDishes } from '../../interfaces';
import DishItem from '../DishItem/DishItem';
import styles from './styles.module.css'

interface Props {
    dishes: IDishes[];
}

const DishesList = ({ dishes }: Props) => {
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