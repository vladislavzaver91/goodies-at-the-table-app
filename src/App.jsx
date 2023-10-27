import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import AboutPage from "./pages/AboutPage/AboutPage";
import Layout from "./components/Layout/Layout";
import RecipeItemPage from "./pages/RecipeItemPage/RecipeItemPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="/:recipeId" element={<RecipeItemPage />} />
          <Route path="about_us" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  )
};

export default App
