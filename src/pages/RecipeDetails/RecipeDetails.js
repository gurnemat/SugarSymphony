import "./RecipeDetails.scss";
import RecipesList from "../../components/RecipesList/RecipesList";
import logo from "../../assets/logo/logo-49a5af15059c4111e271.png";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
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
  }, [params.reciepeId]);

  return (
    <>
      <header className="recipe-details-header">
        <div className="recipe-details-header__content">
          <div className="recipe-details-header__logo">
            <Link to="/">{/* <img src={logo} alt="LOGO" /> */}</Link>
          </div>
          <div className="logo">
            <span className="logo__s1">S</span>
            <span className="logo__s2">S</span>
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
      <div className="recipe-details">
        <div className="recipe-details__content">
          <h2>{recipe.title}</h2>
          <p>{recipe.date}</p>
          <img src={recipe.imageUrl} alt="" />

          <div className="recipe-details__content__description">
            <h2>Ingredients:</h2>
            <ul>
              <li>2 cups all-purpose flour</li>
              <li>1 3/4 cups granulated sugar</li>
              <li>3/4 cup unsweetened cocoa powder</li>
              <li>1 1/2 teaspoons baking powder</li>
              <li>1 1/2 teaspoons baking soda</li>
              <li>1 teaspoon salt</li>
              <li>2 large eggs</li>
              <li>1 cup whole milk</li>
              <li>1/2 cup vegetable oil</li>
              <li>2 teaspoons pure vanilla extract</li>
              <li>1 cup boiling water</li>
            </ul>
            <section>
              <h2>Instructions:</h2>
              <ol>
                <li>
                  Preheat the oven to 350°F (175°C). Grease and flour two 9-inch
                  round cake pans.
                </li>
                <li>
                  In a large bowl, sift together flour, sugar, cocoa powder,
                  baking powder, baking soda, and salt.
                </li>
                <li>
                  Add eggs, milk, oil, and vanilla extract. Beat on medium speed
                  for 2 minutes.
                </li>
                <li>
                  Stir in boiling water until the batter is well combined (the
                  batter will be thin).
                </li>
                <li>Pour the batter evenly into the prepared pans.</li>
                <li>
                  Bake for 30 to 35 minutes, or until a toothpick inserted into
                  the center comes out clean.
                </li>
                <li>
                  Allow the cakes to cool in the pans for 10 minutes, then
                  transfer to a wire rack to cool completely.
                </li>
              </ol>
            </section>
            <section>
              <h2>Decoration (Optional):</h2>
              <p>
                You can frost the cake with your favorite chocolate frosting and
                decorate with sprinkles or chocolate shavings.
              </p>
            </section>
          </div>
        </div>
        <div className="recipe-details__recipesList">
          <RecipesList />
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
