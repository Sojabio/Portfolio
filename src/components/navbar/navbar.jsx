import { useState } from 'react';
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
          <Link className="navitem" id="home"
            to="/"
            onMouseEnter={handleHomeLinkHover}
            onMouseLeave={handleHomeLinkLeave}
          >
            {homeLinkContent}
          </Link>
        </li>
        <li>
          <Link className="navitem" to="/About">à propos</Link>
        </li>
        <li>
          <Link className="navitem" to="/Resume">cv</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
