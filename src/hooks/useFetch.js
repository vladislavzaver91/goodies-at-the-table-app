import { useState } from "react";
import { fetchData, fetchSearchData, fetchDataByFilter } from "../services/apiEdamam";

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);

    const fetchDataWithFilter = async (selectedDishType, searchQuery) => {
        setIsLoading(true);
        try {
            console.log("Fetching data for Dish Type:", selectedDishType);
            const res = await fetchDataByFilter(selectedDishType, searchQuery);
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

    const fetchDataWithoutFilter = async (searchQuery) => {
        setIsLoading(true);
        try {
            console.log("Fetching data without Dish Type filter");
            const res = await fetchData(searchQuery);
            const dishes = res.hits.map(item => item.recipe);
            setNextPage(res._links.next.href);
            setData(dishes);
            setIsLastPage(!res._links.next);
        } catch (error) {
            console.error("Error fetching data without filter:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchDataBySearch = async (searchQuery) => {
        setIsLoading(true);
        try {
            if (searchQuery) {
                console.log("Fetching data without Dish Type filter");
                const res = await fetchSearchData(searchQuery);
                const dishes = res.hits.map(item => item.recipe);
                setNextPage(res._links.next.href);
                setData(dishes);
                setIsLastPage(!res._links.next);
            }
            
        } catch (error) {
            console.error("Error fetching data without filter:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
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
    };
};

export default useFetchData;