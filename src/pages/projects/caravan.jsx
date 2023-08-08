import './caravan.css'
import caravanImage from '/src/assets/images/caravan.png';
import rechercheImage from '/src/assets/images/recherche.png';
import dashboardImage from '/src/assets/images/dashboard.png';

const Caravan = () => {
  return(
    <div className="project-container">
      <div className="project-title">
        CaraVan
      </div>
      <div className="technos">
       - Ruby on Rails - javascript - stripe - mailjet -
      </div>
      <div className="project-columns">
        <div className="left-column">
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

export default Caravan;
