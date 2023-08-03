import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (

    <nav>
      <ul>
        <li>
        <Link to="/About">À propos de moi</Link>
        </li>
        <li>
        <Link to="/Resume">Mon CV</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar;
