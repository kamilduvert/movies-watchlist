import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__content">
          <div className="header__brand">
            <Link to="/">MyMovieWatchList</Link>
          </div>

          <ul className="header__nav__list">
            <li className="header__nav__item">
              <Link className="header__nav__link" to="/">Watch List</Link>
            </li>

            <li className="header__nav__item">
              <Link className="header__nav__link" to="/watched">Watched</Link>
            </li>

            <li className="header__nav__item">
              <Link className="header__nav__link" to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
