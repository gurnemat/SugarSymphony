import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Recipes from "./pages/Recipes/Recipes";

const AppLayout = () => (
  <div>
    <Outlet />
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:recipeId" element={<RecipeDetails />} />
          <Route path="/recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
