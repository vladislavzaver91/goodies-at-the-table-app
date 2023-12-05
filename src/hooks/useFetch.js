import { useState } from "react";
import { fetchData, fetchSearchData, fetchDataByFilter } from "../services/apiEdamam";

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    const [error, setError] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const fetchDataWithFilter = async (selectedDishType, searchQuery) => {
        setIsLoading(true);
        try {
            const res = await fetchDataByFilter(selectedDishType, searchQuery);
            const dishes = res.hits.map(item => item.recipe);

            if (dishes.length === 0) {
                setNoResults(true);
            } else {
                setNoResults(false);
            }

            setNextPage(res._links.next.href);
            setData(dishes);
            setIsLastPage(!res._links.next);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchDataWithoutFilter = async (searchQuery) => {
        setIsLoading(true);
        try {
            const res = await fetchData(searchQuery);
            const dishes = res.hits.map(item => item.recipe);

            if (dishes.length === 0) {
                setNoResults(true);
            } else {
                setNoResults(false);
            }

            setNextPage(res._links.next.href);
            setData(dishes);
            setIsLastPage(!res._links.next);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchDataBySearch = async (searchQuery) => {
        setIsLoading(true);
        try {
            if (searchQuery) {
                const res = await fetchSearchData(searchQuery);
                const dishes = res.hits.map(item => item.recipe);

                if (dishes.length === 0) {
                    setNoResults(true);
                } else {
                    setNoResults(false);
                }

                setNextPage(res._links.next.href);
                setData(dishes);
                setIsLastPage(!res._links.next);
            }
            
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
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
    };
};

export default useFetchData;