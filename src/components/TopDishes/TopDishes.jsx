import { useEffect, useState } from 'react';
import RecommendationList from '../RecommendationList/RecommendationList';
import { fetchRandomData } from '../../services/apiEdamam';
import styles from './styles.module.css';

const TopDishes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchRandomData().then((res) => {
            const dishes = res.hits.map(item => item.recipe);
            setData(dishes);
            console.log(dishes);
        })
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Most popular dishes
                </h2>
                <RecommendationList dishes={data} />
            </div>
        </section>
    )
};

export default TopDishes;