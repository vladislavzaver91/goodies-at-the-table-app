import RecommendationItem from '../RecommendationItem/RecommendationItem';
import styles from './styles.module.css';

const RecommendationList = ({ dishes }) => {
    return (
        <>
            <ul className={styles.list}>
                {dishes.map((dish, index) => (
                    <RecommendationItem key={index} dish={dish}/>
                ))}
            </ul>
        </>
    )
};

    export default RecommendationList;