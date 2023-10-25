import RecommendationList from '../RecommendationList/RecommendationList';
import styles from './styles.module.css';

const TopRecipes = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Most popular recipes
                </h2>
                <RecommendationList />
            </div>
        </section>
    )
};

export default TopRecipes;