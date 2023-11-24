import { useState, useEffect } from 'react';
import { fetchNextPage } from '../../services/apiEdamam';
import Loader from '../Loader/Loader';
import DishesList from '../DishesList/DishesList';
import styles from './styles.module.css';
import DishesFilter from '../DishesFilter/DishesFilter';
import { useSearch } from '../../contexts/Context.jsx';
import useFetchData from '../../hooks/useFetch.js';
import ShowMoreButton from '../Buttons/ShowMoreButton/ShowMoreButton.jsx';
import ScrollTopButton from '../Buttons/ScrollTopButton/ScrollTopButton.jsx';

const Dishes = () => {
    const [selectedDishType, setSelectedDishType] = useState(null);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const {
        isLoading,
        data,
        nextPage,
        isLastPage,
        setData,
        setIsLoading,
        setIsLastPage,
        setNextPage,
        fetchDataWithFilter,
        fetchDataWithoutFilter,
        fetchDataBySearch,
    } = useFetchData();

    const { searchQuery, setSearchQuery, setIsFilterApplied } = useSearch();

    console.log(searchQuery);

    const dishTypes = ['Desserts', 'Drinks', 'Main course', 'Pancake', 'Sandwiches', 'Biscuits and cookies'];

    useEffect(() => {
        if (selectedDishType || searchQuery) {
            fetchDataWithFilter(selectedDishType, searchQuery)
        } else {
            fetchDataWithoutFilter();
            setIsFilterApplied(false);
        }
    }, [searchQuery, selectedDishType]);

    useEffect(() => {
        if (searchQuery) {
            fetchDataBySearch(searchQuery);
            setIsFilterApplied(true);
        } else {
            fetchDataWithoutFilter();
            setIsFilterApplied(false);
        }
    }, [searchQuery]);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 600 ? setShowScrollToTop(true) : setShowScrollToTop(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

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
    
    const handleRefresh = () => {
        fetchDataWithoutFilter();
        setSearchQuery('');
        setSelectedDishType(null);
        setIsFilterApplied(false);
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
                        onRefresh={handleRefresh}
                    />
                    <DishesList dishes={data} />
                    {!isLastPage && nextPage && (
                        <ShowMoreButton ShowMoreData={ShowMoreData} />
                    )}
                    <ScrollTopButton show={showScrollToTop} />
                </div>
            )}
        </section>
    );
};

export default Dishes;
