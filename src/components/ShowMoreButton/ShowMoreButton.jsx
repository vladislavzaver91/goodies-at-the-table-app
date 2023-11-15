import styles from './styles.module.css';

const ShowMoreButton = ({ ShowMoreData }) => {
    return (
        <div className={styles.btnWrapper}>
            <button
                type='button'
                className={styles.btn}
                onClick={() => ShowMoreData()}
            >
                Show more
            </button>
        </div>
    )
};

export default ShowMoreButton;