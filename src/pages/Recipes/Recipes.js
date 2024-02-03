import "./Recipes.scss";
import logo from "../../assets/logo/logo.webp";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import RecipeCollection from "../../components/RecipeCollection/RecipeCollection";

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/recipes/${params.recipeId}`
      );
      setRecipe(response.data);
    };
    fetchData();
  }, [params.recipeId]);

  return (
    <>
      <header className="recipe-details-header">
        <div className="recipe-details-header__content">
          <div className="recipe-details-header__logo">
            <Link to="/" className="recipe-details-header__logo">
              <span className="recipe-details-header__logo__s1">S</span>
              <span className="recipe-details-header__logo__s2">S</span>
            </Link>
          </div>
          <div className="recipe-details-header__actions">
            <button>
              <IoSearch />
            </button>
            <button>
              <IoCartOutline />
            </button>
          </div>
        </div>
      </header>

      <RecipeCollection />
    </>
  );
};

export default Recipes;
