import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import ToggleButton from '../buttons/toggle';

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
          <Link to="/About">à propos</Link>
        </li>
        <li>
          <Link to="/Resume">cv</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
