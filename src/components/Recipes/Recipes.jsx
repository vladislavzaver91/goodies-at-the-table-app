import { useState } from 'react';
import styles from './styles.module.css';
import { useEffect } from 'react';
import { fetchBreakfast, fetchDessert } from '../../services/apiTheMealDb';
import RecipesList from '../RecipesList/RecipesList';


const Recipes = () => {
    const [desserts, setDesserts] = useState('');
    const [breakfasts, setBreakfasts] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchDessert().then((res) => {
            setDesserts(res.meals)
        })
    }, []);

    useEffect(() => {
        fetchBreakfast().then((res) => {
            setBreakfasts(res.meals);
        })
    }, []);

    useEffect(() => {
        setRecipes([...desserts, ...breakfasts]);
    }, [breakfasts, desserts]);
    console.log(recipes);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Our recipes
                </h2>
                <RecipesList recipes={recipes} />
            </div>
        </section>
    )
};

export default Recipes;