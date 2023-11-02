import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const DishItem = ({ dish }) => {
    const navigate = useNavigate();
    const { image, mealType, label, uri } = dish;
    const id = uri.split('#')[1];

    return (
        <li
            onClick={() => { navigate(`/${id}`) }}
            className={styles.item}
        >
            <img src={image} alt={label} width={300} height={300} />
            <div className={styles.wrapper}>
                <h3 className={styles.titleItem}>
                    {label}
                </h3>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>
                        {`${mealType[0]}`}
                    </p>
                    <p className={styles.price}>
                        150 UAH
                    </p>
                </div>
                
                <button className={styles.btn}>
                    More details
                </button>
            </div>
        </li>
    );
};

export default DishItem;