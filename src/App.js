import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { IoHome } from "react-icons/io5";
import HomeHero from "./components/HomeHero/HomeHero";
import RecipeCollection from "./components/RecipeCollection/RecipeCollection";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <RecipeCollection />
    </div>
  );
}

export default App;
