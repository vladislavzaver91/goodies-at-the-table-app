import { useState, useEffect } from 'react';
import { fetchData, fetchNextPage } from '../../services/apiEdamam';
import DishesList from '../DishesList/DishesList';
import styles from './styles.module.css';

const Dishes = () => {
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        fetchData().then((res) => {
            const dishes = res.hits.map(item => item.recipe);
            setData(dishes);
            setNextPage(res._links.next.href);
        });
    }, []);

const ShowMoreData = () => {
        if (nextPage) {
            fetchNextPage(nextPage).then((res) => {
                const newDishes = res.data.hits.map(item => item.recipe);
                setData(prevData => [...prevData, ...newDishes]);
                setNextPage(res.data._links.next.href);
            }).catch(error => {
                console.log(error);
            });
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Our dishes
                </h2>
                <DishesList dishes={data} />
                <div className={styles.btnWrapper}>
                    <button
                        type='button'
                        className={styles.btn}
                        onClick={ShowMoreData}
                    >
                        Show more
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Dishes;
