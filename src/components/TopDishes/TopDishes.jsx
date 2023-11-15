import { useEffect, useState } from 'react';
import RecommendationList from '../RecommendationList/RecommendationList';
import { fetchRandomData } from '../../services/apiEdamam';
import styles from './styles.module.css';
import useFetchData from '../../hooks/useFetch.js';
import Loader from '../Loader/Loader';

const TopDishes = () => {
    const [data, setData] = useState([]);
    const { isLoading, setIsLoading } = useFetchData();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetchRandomData();
                const dishes = res.hits.map(item => item.recipe);
                setData(dishes);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [setIsLoading]);

    return (
        <section className={styles.section}>
            {isLoading ? <Loader /> : (
                <div className={styles.container}>
                    <h2 className={styles.title}>
                        Most popular dishes
                    </h2>
                    <RecommendationList dishes={data} />
                </div>
            )}
        </section>
    )
};

export default TopDishes;