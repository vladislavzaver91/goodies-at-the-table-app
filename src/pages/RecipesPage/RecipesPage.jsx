import Hero from "../../components/Hero/Hero";
import Recipes from "../../components/Recipes/Recipes";
import TopRecipes from "../../components/TopRecipes/TopRecipes";
import Footer from '../../components/Footer/Footer';

const RecipesPage = () => {
    return (
        <main>
            <Hero />
            <TopRecipes />
            <Recipes />
            <Footer />
        </main>
    )
}

export default RecipesPage;