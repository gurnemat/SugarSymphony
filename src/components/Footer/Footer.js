import "./Footer.scss";
import FooterEqn from "../../assets/logo/footer-eqn.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons";

const Footer = () => {
  return (
    <div className="footer-section">
      <img src={footerEqn} alt="Cake Equation" />

      <footer className="footer">
        <div className="footer__links">
          <a href="/">Menus</a>
        </div>
      </footer>
    </div>
  );
};
