import axios from "axios";

const APP_ID = import.meta.env.VITE_CAFE_APP_API_ID
const APP_KEY = import.meta.env.VITE_CAFE_APP_API_KEY
const BASE_URL = import.meta.env.VITE_CAFE_APP_BASE_API_URL


export const fetchData = async () => {
    try {
        const res = await axios.get(`${BASE_URL}?mealType=Breakfast&mealType=Teatime&dishType=Biscuits%20and%20cookies&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Sandwiches&`, {
            params: {
                app_key: APP_KEY,
                app_id: APP_ID,
                health: "alcohol-free",
                type: "public",
                imageSize: 'REGULAR',
            },
        })
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchSearchData = async (searchQuery) => {
    try {
        const res = await axios.get(`${BASE_URL}?mealType=Breakfast&mealType=Teatime&dishType=Biscuits%20and%20cookies&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Sandwiches&`, {
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

export const fetchDataByFilter = async (dishType, searchQuery) => {
    try {
        const res = await axios.get(`${BASE_URL}?mealType=Breakfast&mealType=Teatime`, {
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

export const fetchNextPage = (nextPage) => {
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

export const fetchRandomData = async () => {
    try {
        const res = await axios.get(`${BASE_URL}?mealType=Breakfast&mealType=Teatime&dishType=Desserts&dishType=Drinks&dishType=Main%20course&dishType=Pancake&dishType=Sandwiches&dishType=Biscuits%20and%20cookies`, {
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
    }
};

export const fetchById = async id => {
    try {
        const res = await axios.get(`${BASE_URL}/${id}?`, {
            params: {
                app_key: APP_KEY,
                app_id: APP_ID,
                type: "public",
            },
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
