import axios from "axios";
import "./RecipesList.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipesList = () => {
  const fetchData = async();
};

useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:8080/api/recipes`);
    setRecipes(response.data);
  };
  fetchData();
}, []);

return (
  <div className="recipe-list">
    <h3>Recent Posts</h3>

    <div className="recipe-list__recipes">
      {recipes.slice(3, 8).map((recipe) => (
        <div className="recipe-list__recipes__card">
          <div className="recipe-list__recipes__card__image">
            <img src={recipe.imageUrl} alt="" />
          </div>

          <div className="recipe-list__recipes__card__description">
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
            <Link to={`/${recipe.recipeID}`}>View Recipe</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecipesList;
