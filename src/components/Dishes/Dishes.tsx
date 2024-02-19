import { useState, useEffect } from 'react';
import { fetchNextPage } from '../../services/apiEdamam.js';
import Loader from '../Loader/Loader.jsx';
import DishesList from '../DishesList/DishesList.jsx';
import styles from './styles.module.css';
import DishesFilter from '../DishesFilter/DishesFilter.jsx';
import { useSearch } from '../../contexts/Context.tsx';
import useFetchData from '../../hooks/useFetch.js';
import ShowMoreButton from '../Buttons/ShowMoreButton/ShowMoreButton.js';
import ScrollTopButton from '../Buttons/ScrollTopButton/ScrollTopButton.js';
import NotFoundBySearchError from '../NotFoundBySearchError/NotFoundBySearchError.jsx';
import { IFetchData } from '../../interfaces/index.ts';

const Dishes = () => {
    const [selectedDishType, setSelectedDishType] = useState<string | null>(null);
    const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
    const {
        isLoading,
        data,
        nextPage,
        isLastPage,
        noResults,
        error,
        setData,
        setIsLoading,
        setIsLastPage,
        setNextPage,
        fetchDataWithFilter,
        fetchDataWithoutFilter,
        fetchDataBySearch,
    }: IFetchData = useFetchData();

    const { searchQuery, setSearchQuery, setIsFilterApplied } = useSearch();
    const dishTypes: string[] = ['Desserts', 'Drinks', 'Main course', 'Pancake', 'Sandwiches', 'Biscuits and cookies'];

    useEffect(() => {
        if ((selectedDishType || searchQuery) && typeof selectedDishType === 'string') {
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

    const showMoreData = async () => {
        if (nextPage) {
            setIsLoading(true);
            try {
                const res = await fetchNextPage(nextPage);
                console.log(res);
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
                    {noResults && error ? (
                        <NotFoundBySearchError onRefresh={handleRefresh} />
                    ) : (
                        <>
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
                                <ShowMoreButton showMoreData={showMoreData} />
                            )}
                            <ScrollTopButton show={showScrollToTop} />
                        </>
                    )}
                </div>
            )}
        </section>
    );
};

export default Dishes;
