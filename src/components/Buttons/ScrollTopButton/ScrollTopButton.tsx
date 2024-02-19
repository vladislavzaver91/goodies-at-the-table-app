import { FaArrowCircleUp } from "react-icons/fa";
import styles from './styles.module.css';

interface Props {
    show: boolean;
}

const ScrollTopButton = ({ show }: Props) => {
    const scrollToTop = (): void => {
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
                style={{ color: '#884619' }}
            />
        </div>
    )
};

export default ScrollTopButton;