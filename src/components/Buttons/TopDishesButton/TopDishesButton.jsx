import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

const TopDishesButton = ({id}) => {
    const navigate = useNavigate();

    return (
        <button
            className={styles.btn}
            onClick={() => { navigate(`/${id}`) }}
            style={{ width: 'fit-content' }}
        >
            More details
        </button>
    )
};

export default TopDishesButton;