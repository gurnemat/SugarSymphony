import { useEffect, useState } from "react";
import "./RecipeCollection.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeCollection = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/recipes`);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the function to initiate data fetching
  }, []);

  return (
    <div className="recipe-collection">
      <h1 className="recipe-collection__title">Our Recipes</h1>
      <div className="recipe-collection__recipes">
        {recipes.map((recipe) => (
          <div
            className="recipe-collection__recipes__card"
            key={recipe.recipeID}
          >
            <div className="recipe-collection__recipes__card__image">
              <img src={recipe.imageUrl} alt="" />
            </div>

            <h2>{recipe.title}</h2>
            <div className="recipe-collection__recipes__card__description">
              <p>{recipe.description}</p>
            </div>
            <Link to={`/${recipe.recipeID}`}>View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCollection;
