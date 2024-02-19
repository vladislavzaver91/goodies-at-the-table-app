import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import DishesPage from './pages/DishesPage/DishesPage';
import AboutPage from "./pages/AboutPage/AboutPage";
import Layout from "./components/Layout/Layout";
import DishItemPage from "./pages/DishItemPage/DishItemPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dishes" element={<DishesPage />} />
          <Route path="/:dishId" element={<DishItemPage />} />
          <Route path="about_us" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
};

export default App
