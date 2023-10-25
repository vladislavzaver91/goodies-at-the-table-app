import styles from './styles.module.css';

const RecommendationList = () => {
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img src="" alt="" width={403} height={212} />
                    <div className={styles.wrapper}>
                        <h3 className={styles.title}>
                            waffles
                        </h3>
                        <p className={styles.text}>
                            A great recipe to have breakfast with friends in the morning.
                        </p>
                        <button className={styles.btn}>
                            View recipe
                        </button>
                    </div>
                </li>
                <li className={styles.item}>
                    <img src="" alt="" width={403} height={212} />
                    <div className={styles.wrapper}>
                        <h3 className={styles.title}>
                            waffles
                        </h3>
                        <p className={styles.text}>
                            A great recipe to have breakfast with friends in the morning.
                        </p>
                        <button className={styles.btn}>
                            View recipe
                        </button>
                    </div>
                </li>
                <li className={styles.item}>
                    <img src="" alt="" width={403} height={212} />
                    <div className={styles.wrapper}>
                        <h3 className={styles.title}>
                            waffles
                        </h3>
                        <p className={styles.text}>
                            A great recipe to have breakfast with friends in the morning.
                        </p>
                        <button className={styles.btn}>
                            View recipe
                        </button>
                    </div>
                </li>
            </ul>
        </>
    )
};

    export default RecommendationList;