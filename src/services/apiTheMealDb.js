import axios from "axios";

const BASE_URL = import.meta.env.VITE_CAFE_APP_BASE_API_URL

export const fetchDessert = async () => {
    try {
        const res = await axios.get(`${BASE_URL}filter.php?`, {
            params: {
                c: 'Dessert',
            },
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchBreakfast = async () => {
    try {
        const res = await axios.get(`${BASE_URL}filter.php?`, {
            params: {
                c: 'Breakfast',
            },
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchById = async (recipeId) => {
    try {
        const res = await axios.get(`${BASE_URL}lookup.php?`, {
            params: {
                i: recipeId,
            },
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
