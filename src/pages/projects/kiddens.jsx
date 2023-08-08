import './caravan.css'
import caravanImage from '/src/assets/images/caravan.png';
import rechercheImage from '/src/assets/images/recherche.png';
import dashboardImage from '/src/assets/images/dashboard.png';
import Github from '/src/components/buttons/github';


const Kiddens = () => {
  return(
    <div className="project-container">
      <div className="project-columns">
        <div className="left-column">
          <div className="project-title">
              <h2>CaraVan</h2>
              <a id="github-project" href="https://github.com/Demonelfes/Caravan_THP_Project" target="_blank">
              <Github/>
              </a>
          </div>
          <div>
            <p><span>CaraVan</span> est une plateforme de location de vans qui permet :</p>
            <ul>
              <li>- la location de vans entre particuliers</li>
              <li>- la location de vans mis à disposition par des professionnels </li>
            </ul>
          </div>
          <div className="characteristics">
            <p>Caractéristiques principales : </p>
            <ul>
              <li>- recherche multicritères</li>
              <li>- calendrier des disponibilités</li>
              <li>- géolocalisation des véhicules</li>
              <li>- tableau de bord administrateur</li>
              <li>- envoi de courriels automatisé</li>
            </ul>
          </div>
          <div className="arrow">
            <a href="/projects">{"<"}</a>
          </div>
        </div>
        <div className="right-column">
          <div className="image-container">
              <img src={caravanImage} alt="page d'accueil du site caravan"/>
              <img src={rechercheImage} alt="recherches sur le site caravan"/>
              <img src={dashboardImage} alt="recherches sur le site caravan"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kiddens;
