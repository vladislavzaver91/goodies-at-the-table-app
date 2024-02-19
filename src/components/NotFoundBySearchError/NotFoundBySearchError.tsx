import { IoRefresh } from "react-icons/io5";
import styles from './styles.module.css';

interface Props {
    onRefresh: () => void;
}

const NotFoundBySearchError = ({ onRefresh }: Props) => {
    return (
            <div className={styles.container}>
                <h2 className={styles.title}>Oops! Not found</h2>
                <p className={styles.text}>Sorry, but nothing was found for your request.</p>
                <button
                    className={styles.btn}
                    onClick={() => onRefresh()}
                >
                    <IoRefresh className={styles.icon} />
                    Refresh
                </button>
            </div>
    )
};

export default NotFoundBySearchError;