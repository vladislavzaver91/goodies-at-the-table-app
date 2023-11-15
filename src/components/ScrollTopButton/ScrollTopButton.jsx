import { FaArrowCircleUp } from "react-icons/fa";
import styles from './styles.module.css';

const ScrollTopButton = ({ show }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`${styles.scrollTopBtn} ${show ? styles.show : styles.hide}`}
            onClick={scrollToTop}
        >
            <FaArrowCircleUp
                className={styles.scrollTopIcon}
                style={{ color: '#FFDB63' }}
            />
        </div>
    )
};

export default ScrollTopButton;