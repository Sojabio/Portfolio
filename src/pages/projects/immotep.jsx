import './style.css'
import {Link} from 'react-router-dom'
import immotepAccueil from '/src/assets/images/immotep/accueil_immotep.png';
import immotepAdd from '/src/assets/images/immotep/add_immotep.png';
import Github from '/src/components/buttons/github';


const Immotep = () => {
  return(
    <div className="project-container">
      <div className="project-columns">
        <div className="left-column">
          <div className="project-title">
              <h2>Immotep</h2>
              <a id="github-project" href="https://github.com/Sojabio/ImmoTep_front" target="_blank">
              <Github/>
              </a>
          </div>
          <div>
            <p><span>Immotep</span> est une plateforme de publication d'annonces immobilières :</p>
            <ul>
              <li>- la publication, la modification et la suppression d'annonces</li>
              <li>- la consultation d'annonces </li>
            </ul>
          </div>
          <div className="characteristics">
            <p><span>Caractéristiques principales : </span></p>
            <ul>
              <li>- recherche par villes</li>
              <li>- tableau de bord administrateur</li>
              <li>- envoi de courriels automatisé</li>
            </ul>
          </div>
          <div className="characteristics">
            <p><span>Technologies :</span> </p>
            <ul>
              <li>- React + API Rails</li>
              <li>- Devise | Mailjet | Bootstrap | PostgreSQL</li>
            </ul>
          </div>
          <div>
            <Link  className="arrow" to="/projects">{"<"}</Link>
          </div>
        </div>
        <div className="right-column">
          <div className="image-container">
              <img src={immotepAccueil} alt="page d'accueil du site Immotep"/>
              <img src={immotepAdd} alt="formulaire d'ajout du site Immotep"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Immotep;
