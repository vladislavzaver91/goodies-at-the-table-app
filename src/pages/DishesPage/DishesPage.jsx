import Hero from "../../components/Hero/Hero";
import Dishes from "../../components/Dishes/Dishes";
import TopDishes from "../../components/TopDishes/TopDishes";
import Footer from '../../components/Footer/Footer';

const DishesPage = () => {
    return (
        <main>
            <Hero />
            <TopDishes />
            <Dishes />
            <Footer />
        </main>
    )
}

export default DishesPage;