import Hero from "../../components/Hero/Hero";
import RecipesList from "../../components/RecipesList/RecipesList";
import TopRecipes from "../../components/TopRecipes/TopRecipes";
import Footer from '../../components/Footer/Footer';

const RecipesPage = () => {
    return (
        <main>
            <Hero />
            <TopRecipes />
            <RecipesList />
            <Footer />
        </main>
    )
}

export default RecipesPage;