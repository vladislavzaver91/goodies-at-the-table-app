import styles from './styles.module.css';

interface Props {
    showMoreData: () => void;
}

const ShowMoreButton = ({ showMoreData }: Props) => {
    return (
        <div className={styles.btnWrapper}>
            <button
                type='button'
                className={styles.btn}
                onClick={() => showMoreData()}
            >
                Show more
            </button>
        </div>
    )
};

export default ShowMoreButton;