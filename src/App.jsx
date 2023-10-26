import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/Recipes';
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </>
  )
};

export default App
