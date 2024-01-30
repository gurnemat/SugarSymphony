import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/logo/logo-49a5af15059c4111e271.png";
import { IoSearch, IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `header${isSticky ? "sticky" : ""}`;

  return (
    <header className={headerClasses}>
      <div className="header__content">
        <div className="header__logo">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="header__actions">
          <button>
            <IoSearch />
          </button>
          <button>
            <IoCartOutline />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
