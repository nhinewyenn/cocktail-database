import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Cocktail Info.webp';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail info logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
