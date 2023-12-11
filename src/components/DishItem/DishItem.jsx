import styles from './styles.module.css';
import DishItemButton from '../Buttons/DishItemButton/DishItemButton';

const DishItem = ({ dish }) => {
    const { image, mealType, label, uri } = dish;
    const id = uri.split('#')[1];
    const capitalizedMealType = mealType[0].charAt(0).toUpperCase() + mealType[0].slice(1);

    return (
        <li className={styles.item}>
            <img src={image} alt={label} className={styles.itemImg} />
            <div className={styles.wrapper}>
                <h3 className={styles.titleItem}>
                    {label}
                </h3>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>
                        {capitalizedMealType}
                    </p>
                    <p className={styles.price}>
                        150 UAH
                    </p>
                </div>
                <DishItemButton id={id} />
            </div>
        </li>
    );
};

export default DishItem;