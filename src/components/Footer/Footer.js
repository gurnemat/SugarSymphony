import "./Footer.scss";
import footerEqn from "../../assets/logo/footer-eqn.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import Modal from "react-modal";
import { useState } from "react";

const Footer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="footer-section">
      <img src={footerEqn} alt="Cake Equation" />

      <footer className="footer">
        <div className="footer__links">
          <Link to="/recipes">Cake Recipes</Link>
          <button onClick={setIsOpen}>Subscribe to newsletter</button>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Newsletter"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Subscribe to newsletter</h2>
        <button onClick={closeModal} className="closeBtn">
          X
        </button>

        <NewsletterForm />
      </Modal>
    </div>
  );
};

export default Footer;
