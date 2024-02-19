import { useState } from "react";
import { fetchData, fetchSearchData, fetchDataByFilter } from "../services/apiEdamam";
import { IDishes, IFetchData } from "../interfaces";

const useFetchData = (): IFetchData => {
    const [data, setData] = useState<IDishes[]>([]);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLastPage, setIsLastPage] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [noResults, setNoResults] = useState<boolean>(false);

    const fetchDataWithFilter = async (selectedDishType: string, searchQuery: string): Promise<void> => {
        setIsLoading(true);
        try {
            const res = await fetchDataByFilter(selectedDishType, searchQuery);
            console.log(res);
            const dishes = res.hits.map(item => item.recipe);

            if (dishes.length === 0) {
                setNoResults(true);
            } else {
                setNoResults(false);
            }

            setNextPage(res._links.next.href);
            setData(dishes);
            setIsLastPage(!res._links.next);
        } catch (error: unknown) {

            if (error instanceof Error) {
                setError(error);
            } else {
                setError(null)
            }
            
        } finally {
            setIsLoading(false);
        }
    };

    const fetchDataWithoutFilter = async (searchQuery?: string): Promise<void> => {
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
        } catch (error: unknown) {
            
            if (error instanceof Error) {
                setError(error);
            } else {
                setError(null)
            }
            
        } finally {
            setIsLoading(false);
        }
    };

    const fetchDataBySearch = async (searchQuery: string) => {
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
            
        } catch (error: unknown) {
            
            if (error instanceof Error) {
                setError(error);
            } else {
                setError(null)
            }
            
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