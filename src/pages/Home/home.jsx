import {Link} from 'react-router-dom'
import { useState } from 'react';
import './home.css'
const Home = () => {

  const [sojabio, setSojabio] = useState("Soja Bio");

  const handleSojaHover = () => {
    setSojabio('Dev Web Fullstack');
  };

  const handleSojaLeave = () => {
    setSojabio('Soja Bio');
  };

  return (
    <>
    <Link to="/About"
      onMouseEnter={handleSojaHover}
      onMouseLeave={handleSojaLeave}>
      <pre>&lt;{sojabio}/&gt;</pre>
      </Link>
    <Link className="brackets" to="/projects">{"{ portfolio }"}</Link>
    </>
  )

}

export default Home;
