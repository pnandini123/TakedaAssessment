import React from "react";
import "./styles.css";
import { FiAlignLeft } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ReactComponent as SearchIcon } from "../../Images/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <FiAlignLeft className="header-icon" />
      <nav className="nav">
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <a href="#shop" className="nav-item">
          SHOP
        </a>
        <a href="#magazine" className="nav-item">
          MAGAZINE
        </a>
      </nav>
      <div className="icons">
        <SearchIcon />
        <AiOutlineShoppingCart className="cart-icon" />
        <a href="#login" className="login-link">
          LOGIN
        </a>
      </div>
    </div>
  );
};

export default Header;
