import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [homeLinkContent, setHomeLinkContent] = useState('</>');

  const handleHomeLinkHover = () => {
    setHomeLinkContent('<Accueil/>');
  };

  const handleHomeLinkLeave = () => {
    setHomeLinkContent('</>');
  };

  return (
    <nav>
      <ul>
        <li >
          <Link id="home"
            to="/"
            onMouseEnter={handleHomeLinkHover}
            onMouseLeave={handleHomeLinkLeave}
          >
            {homeLinkContent}
          </Link>
        </li>
        <li>
          <Link to="/About">À propos</Link>
        </li>
        <li>
          <Link to="/Resume">CV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
