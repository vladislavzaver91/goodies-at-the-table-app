import TopDishesButton from '../Buttons/TopDishesButton/TopDishesButton';
import styles from './styles.module.css';
import { IDishes } from '../../interfaces';

interface Props {
    dish: IDishes;
}

const RecommendationItem = ({ dish }: Props) => {
    const { image, mealType, label, uri } = dish;
    const id = uri?.split('#')[1];
    const capitalizedMealType = mealType[0].charAt(0).toUpperCase() + mealType[0].slice(1);

    return (
        <li className={styles.item}>
            <img src={image} alt={label} className={styles.itemImg} />
            <div className={styles.wrapper}>
                <h3 className={styles.title}>
                    {label}
                </h3>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>
                        {capitalizedMealType}
                    </p>
                    <p className={styles.text}>
                        150 UAH
                    </p>
                </div>
                <TopDishesButton id={id} />
            </div>
        </li>
    );
};

export default RecommendationItem;