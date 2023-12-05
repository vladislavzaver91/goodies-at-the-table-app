import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from './styles.module.css';

const NotFoundByServerError = () => {
    const navigate = useNavigate();
    
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>404 - not found</h2>
                <p className={styles.text}>Sorry, the page you are looking for does not exist.</p>
                <button
                    className={styles.btn}
                    onClick={() => navigate('/dishes')}
                >
                    <IoMdArrowRoundBack className={styles.icon} />
                    Go back
                </button>
            </div>
        </section>
    )
};

export default NotFoundByServerError;