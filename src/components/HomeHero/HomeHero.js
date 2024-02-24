import "./HomeHero.scss";
import CakeImage from "../../assets/logo/Cake.webp";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <img src={CakeImage} alt="" />
      <div className="home-hero__content">
        <h1>SugarSymphony</h1>
        {/* <a href="/">recipes</a> */}
      </div>
    </div>
  );
};

export default HomeHero;
