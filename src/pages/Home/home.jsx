import {Link} from 'react-router-dom'
import { useState } from 'react';
import './home.css'
const Home = () => {

  const [sojabio, setSojabio] = useState("solène jabaud");

  const handleSojaHover = () => {
    setSojabio('dev web fullstack');
  };

  const handleSojaLeave = () => {
    setSojabio('solène jabaud');
  };

  return (
    <>
    <Link to="/About"
      onMouseEnter={handleSojaHover}
      onMouseLeave={handleSojaLeave}
      className="bio-link">
       <pre className="bio-text">&lt;{sojabio.replace(' ', '\n')}&gt;</pre>
      </Link>
    <Link className="brackets" to="/projects">{"{ portfolio }"}</Link>
    </>
  )

}

export default Home;
