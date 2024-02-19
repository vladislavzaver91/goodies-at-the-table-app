import axios from "axios";
import { IDataApi, IDishInfo, IDishesApiResponse } from "../interfaces";

const APP_ID = import.meta.env.VITE_CAFE_APP_API_ID
const APP_KEY = import.meta.env.VITE_CAFE_APP_API_KEY
const BASE_URL = import.meta.env.VITE_CAFE_APP_BASE_API_URL


export const fetchData = async (searchQuery?: string): Promise<IDishesApiResponse> => {
    try {
        const res = await axios.get<IDishesApiResponse>(`${BASE_URL}?mealType=Breakfast&mealType=Teatime&dishType=Biscuits%20and%20cookies&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Sandwiches&`, {
            params: {
                app_key: APP_KEY,
                app_id: APP_ID,
                health: "alcohol-free",
                type: "public",
                imageSize: 'REGULAR',
                q: searchQuery,
            },
        })
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchSearchData = async (searchQuery: string): Promise<IDishesApiResponse> => {
    try {
        const res = await axios.get<IDishesApiResponse>(`${BASE_URL}?mealType=Breakfast&mealType=Teatime&dishType=Biscuits%20and%20cookies&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Sandwiches&`, {
            params: {
                app_key: APP_KEY,
                app_id: APP_ID,
                health: "alcohol-free",
                type: "public",
                imageSize: 'REGULAR',
                q: searchQuery,
            },
        })
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchDataByFilter = async (dishType: string, searchQuery: string): Promise<IDishesApiResponse> => {
    try {
        const res = await axios.get<IDishesApiResponse>(`${BASE_URL}?mealType=Breakfast&mealType=Teatime`, {
            params: {
                app_key: APP_KEY,
                app_id: APP_ID,
                health: "alcohol-free",
                type: "public",
                dishType: dishType,
                q: searchQuery,
                imageSize: 'REGULAR',
            },
        })
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchNextPage = (nextPage: string): Promise<IDataApi> => {
    return axios.get(nextPage, {
        params: {
            app_key: APP_KEY,
            app_id: APP_ID,
            health: "alcohol-free",
            type: "public",
            imageSize: 'REGULAR',
        },
    });
};

export const fetchRandomData = async (): Promise<IDishesApiResponse> => {
    try {
        const res = await axios.get<IDishesApiResponse>(`${BASE_URL}?mealType=Breakfast&mealType=Teatime&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Sandwiches&dishType=Biscuits%20and%20cookies`, {
            params: {
                app_key: APP_KEY,
                app_id: APP_ID,
                health: "alcohol-free",
                type: "public",
                imageSize: 'REGULAR',
                random: true,
            },
        })
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchById = async (id?: string): Promise<IDishInfo> => {
    try {
        const res = await axios.get<IDishInfo>(`${BASE_URL}/${id}?`, {
            params: {
                app_key: APP_KEY,
                app_id: APP_ID,
                type: "public",
            },
        })
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
