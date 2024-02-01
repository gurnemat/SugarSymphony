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
            <Link to="/">
              <img src={logo} alt="LOGO" />
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
      <div className="recipe-details">
        <div className="recipe-details__content">
          <h2>{recipe.title}</h2>
          <p>{recipe.date}</p>
          <img src={recipe.imageUrl} alt="" />

          <div className="recipe-details__content__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus
            quam diam, semper in erat eu, efficitur molestie purus. Sed a
            elementum mi. Sed interdum mattis risus, sit amet eleifend ligula
            luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et,
            ultrices est. Suspendisse eleifend dui odio, id volutpat quam
            iaculis eu. Nunc sit amet scelerisque mauris. Phasellus volutpat
            mauris ac sem tincidunt, in fringilla arcu ultrices. Phasellus
            scelerisque eros vel pulvinar gravida. Aenean suscipit felis orci,
            sed egestas libero dignissim at. Sed commodo malesuada ligula, nec
            vehicula risus fermentum sed. Integer pretium posuere est. Ut
            interdum mollis ipsum, ac vehicula nisl laoreet et. Curabitur ac
            ipsum aliquam, varius purus at, lobortis purus. Maecenas quis sem
            dapibus, volutpat odio non, mattis dui. Nam eget urna nec mi tempor
            mollis vel nec felis. Cras tellus est, malesuada at leo vitae,
            lacinia pellentesque eros. Donec accumsan tincidunt velit.
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
