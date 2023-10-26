import styles from './styles.module.css';

const RecipesList = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Our recipes
                </h2>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <img src="" alt="" width={403} height={322} />
                    <div className={styles.wrapper}>
                        <h3 className={styles.titleItem}>
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
                        <img src="" alt="" width={403} height={322} />
                    <div className={styles.wrapper}>
                        <h3 className={styles.titleItem}>
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
                        <img src="" alt="" width={403} height={322} />
                    <div className={styles.wrapper}>
                        <h3 className={styles.titleItem}>
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

            </div>
        </section>
    )
};

export default RecipesList;