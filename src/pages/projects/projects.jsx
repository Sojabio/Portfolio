import { Link } from 'react-router-dom';
import caravanImage from '/src/assets/images/caravan/caravan.png';
import kiddensImage from '/src/assets/images/kiddens/kiddens_accueil.jpg'
import immotepImage from '/src/assets/images/immotep/accueil_immotep.png'
import potichaImage from '/src/assets/images/poticha/accueil_poticha.png'

import './projects.css'

const Projects = () => {


    return (
      <div className="cards">
        <div className="card">
          <img src={caravanImage} alt="capture d'écran de la page d'accueil du site CaraVan"/>
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
        <div className="card">
          <img src={immotepImage} alt="capture d'écran du site Immotep"/>
          <div className="card-body">
            <h2>{"[Immotep]"}</h2>
            <p className="card-text">Plateforme d'annonces immobilières</p>
            <h5>React + API Rails</h5>
          </div>
          <Link to="/projects/immotep" className="see-more-button">en savoir plus</Link>
        </div>
        <div className="card">
          <img src={potichaImage} alt="capture d'écran du site LePôticha"/>
          <div className="card-body">
            <h2>{"[Le Pôticha éditions]"}</h2>
            <p className="card-text">Site réalisé pour une maison d'édition associative</p>
            <h5>React + API Rails</h5>
          </div>
          <Link to="/projects/poticha" className="see-more-button">en savoir plus</Link>
        </div>
     </div>
    );
  }

export default Projects;
