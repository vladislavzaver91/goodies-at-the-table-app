import styles from './styles.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.heroTitle}>
                    Get inspired, cook with love and enjoy
                    unforgettable moments at the table</h1>
            </div>
        </section>
    )
}

export default Hero;