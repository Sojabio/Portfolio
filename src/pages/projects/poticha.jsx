import './style.css'
import {Link} from 'react-router-dom'
import potichaAccueil from '/src/assets/images/poticha/accueil_poticha.png';
import potichaContact from '/src/assets/images/poticha/contact_poticha.png';
import potichaCountdown from '/src/assets/images/poticha/countdown_poticha.png';
import potichaDashboard from '/src/assets/images/poticha/dashboard_poticha.png';

import Github from '/src/components/buttons/github';


const Poticha = () => {
  return(
    <div className="project-container">
      <div className="project-columns">
        <div className="left-column">
          <div className="project-title">
              <h2>Le Pôticha</h2>
              <a id="github-project" href="https://github.com/Sojabio/Poticha_front" target="_blank">
              <Github/>
              </a>
          </div>
          <div>
            <p><span>Le Pôticha </span> est un site réalisé pour une maison d'édition associative qui permet :</p>
            <ul>
              <li>- de se renseigner sur les activités de l'association</li>
              <li>- de contacter les auteurices et l'association </li>
            </ul>
          </div>
          <div className="characteristics">
            <p><span>Caractéristiques principales :</span> </p>
            <ul>
              <li>- tableau d'administration</li>
              <li>- système de décompte paramétrable </li>
              <li>- formulaire de contact pour chaque auteurice  </li>
            </ul>
          </div>
          <div className="characteristics">
            <p><span>Technologies :</span> </p>
            <ul>
              <li>- React + API Rails</li>
              <li>- Devise | Cloudinary | Mailjet | PostgreSQL </li>
            </ul>
          </div>
          <div className="arrow">
            <Link to="/projects">{"<"}</Link>
          </div>
        </div>
        <div className="right-column">
          <div className="image-container">
              <img src={potichaAccueil} alt="page d'accueil du site LePôticha éditions"/>
              <img src={potichaContact} alt="formulaire de contact des auteurices du site LePôticha éditions"/>
              <img src={potichaCountdown} alt="système de paramétrage du décompte du site LePôticha éditions"/>
              <img src={potichaDashboard} alt="tableau de bord administrateur du site LePôticha éditions "/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poticha;
