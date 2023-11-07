import { useState, useEffect } from 'react';
import { fetchDataByFilter, fetchNextPage } from '../../services/apiEdamam';
import Loader from '../Loader/Loader';
import DishesList from '../DishesList/DishesList';
import styles from './styles.module.css';
import DishesFilter from '../DishesFilter/DishesFilter';

const Dishes = () => {
    const [data, setData] = useState([]);
    const [selectedDishType, setSelectedDishType] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);

    const dishTypes = ['Desserts', 'Drinks', 'Main course', 'Pancake', 'Sandwiches', 'Biscuits and cookies'];

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetchDataByFilter(selectedDishType);
            const dishes = res.hits.map(item => item.recipe);
            setNextPage(res._links.next.href);
            setData(dishes);
            setIsLastPage(!res._links.next);
        } catch (error) {
            console.error("Error fetching data by filter:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedDishType]);

const ShowMoreData = async () => {
    if (nextPage) {
        setIsLoading(true);
        try {
            const res = await fetchNextPage(nextPage);
            const newDishes = res.data.hits.map(item => item.recipe);
            setData(prevData => [...prevData, ...newDishes]);
            setIsLastPage(!res.data._links.next);
            if (res.data._links.next) {
                setNextPage(res.data._links.next.href);
            } else {
                setNextPage(null);
            }
        } catch (error) {
            console.error("Error fetching next page:", error);
        } finally {
            setIsLoading(false);
        }
    }
};

    return (
        <section className={styles.section}>
            {isLoading ? <Loader /> : (
                <div className={styles.container}>
                    <h2 className={styles.title}>
                        Our dishes
                    </h2>
                    <DishesFilter
                        dishTypes={dishTypes}
                        selectedDishType={selectedDishType}
                        setSelectedDishType={setSelectedDishType}
                    />
                    <DishesList dishes={data} />
                    {!isLastPage && nextPage && (
                        <div className={styles.btnWrapper}>
                            <button
                                type='button'
                                className={styles.btn}
                                onClick={ShowMoreData}
                            >
                                Show more
                            </button>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default Dishes;
