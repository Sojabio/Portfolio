import { Link } from 'react-router-dom';
import caravanImage from '/src/assets/images/caravan/caravan.png';
import kiddensImage from '/src/assets/images/kiddens/kiddens_accueil.jpg'
import './projects.css'

const Projects = () => {


    return (
      <div className="cards">
        <div className="card">
          <img src={caravanImage} />
          <div className="card-body">
            <h2>{"[CaraVan]"}</h2>
            <p className="card-text">Application de location de vans</p>
            <h5>Ruby on Rails</h5>
          </div>
          <Link to="/projects/caravan" className="see-more-button">en savoir plus</Link>
        </div>
        <div className="card">
          <img src={kiddensImage} alt="capture d'écran du site the kiddens project"/>
          <div className="card-body">
            <h2>{"[The Kiddens Project]"}</h2>
            <p className="card-text">Application de vente de photos de chatons</p>
            <h5>Ruby on Rails</h5>
          </div>
          <Link to="/projects/kiddens" className="see-more-button">en savoir plus</Link>
        </div>
     </div>
    );
  }

export default Projects;
