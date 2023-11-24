import { useNavigate } from 'react-router-dom';
import TopDishesButton from '../Buttons/TopDishesButton/TopDishesButton';
import styles from './styles.module.css';

const RecommendationItem = ({ dish }) => {
    const navigate = useNavigate();
    const { image, mealType, label, uri } = dish;
    const id = uri.split('#')[1];

    return (
        <li className={styles.item}>
            <img src={image} alt={label} className={styles.itemImg} />
            <div className={styles.wrapper}>
                <h3 className={styles.title}>
                    {label}
                </h3>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>
                        {mealType[0]}
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