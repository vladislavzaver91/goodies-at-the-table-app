import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

interface Props {
    id?: string;
}

const TopDishesButton = ({id}: Props) => {
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