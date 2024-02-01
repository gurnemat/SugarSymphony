import "./Footer.scss";
import footerEqn from "../../assets/logo/footer-eqn.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <img src={footerEqn} alt="Cake Equation" />

      <footer className="footer">
        <div className="footer__links">
          <a href="/">Menus</a>
          <a href="/"> Write a recipe</a>
        </div>
        <div className="footer__social">
          <ul>
            <li>
              <a href="/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p> &copy; 2024 SugarSymphony. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
