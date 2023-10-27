import styles from './styles.module.css';

const AboutInfo = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.text}>
                    Welcome to Deliciousness at the Table - your retreat into a world of tasty treats! We specialize in creating gourmet desserts, refreshing soft drinks and delectable breakfasts. Our cafe is an exceptional place where every day begins with a delicate breakfast and ends with sweet impressions.
                </p>
                <p className={styles.text}>
                    At Deliciousness at the Table, we will be happy to surprise you with our diverse art in the world of desserts. Our pastry chefs put their soul into every cupcake, tart or cake to delight your taste buds. Whether you're going for a morning coffee with a fragrant croissant, enjoying a light breakfast or looking for the perfect spot for a sweet treat, we've got what you need.
                </p>
                <p className={styles.text}>
                    We invite you to enjoy the peaceful atmosphere, exquisite taste and warmth of our hearts put into every dish. "Delicacies at the Table" is not just a cafe, it is a place where your taste fantasies become reality.
                </p>
            </div>
        </section>
    )
};

export default AboutInfo;