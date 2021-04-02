// == Packages
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner-content">
          <h1 className="header__logo">
            <Link to="/">🎥🍿 The Watchlist</Link>
          </h1>

          <ul className="header__nav__list">
            <li className="header__nav__item">
              <Link className="header__nav__link" to="/">To Watch</Link>
            </li>

            <li className="header__nav__item">
              <Link className="header__nav__link" to="/watched">Already Watched</Link>
            </li>

            <li className="header__nav__item">
              <Link className="header__nav__link btn btn-main" to="/search">
              🔍 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
