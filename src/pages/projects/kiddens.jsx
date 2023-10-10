import './style.css'
import {Link} from 'react-router-dom'
import landing from '/src/assets/images/kiddens/kiddens_accueil.jpg';
import dashboard from '/src/assets/images/kiddens/kiddens_dashboard.jpg';
import cart from '/src/assets/images/kiddens/kiddens_cart.jpg';
import Github from '/src/components/buttons/github';


const Kiddens = () => {
  return(
    <div className="project-container">
      <div className="project-columns">
        <div className="left-column">
          <div className="project-title">
              <h2>The Kiddens Project</h2>
              <a id="github-project" href="https://github.com/Sojabio/TheKiddensProject" target="_blank">
              <Github/>
              </a>
          </div>
          <div>
            <p><span>The Kiddens Project</span> est une plateforme fictive de vente de photos de chatons qui permet :</p>
            <ul>
              <li>- la mise à disposition de photos de chatons</li>
              <li>- l'achat de photos de chatons </li>
            </ul>
          </div>
          <div className="characteristics">
            <p> <span> Caractéristiques principales : </span></p>
            <ul>
              <li>- système de paiement via stripe </li>
              <li>- système d'authentification </li>
              <li>- tableau d'administration</li>
              <li>- envoi de courriels automatisé</li>
            </ul>
          </div>
          <div className="characteristics">
            <p><span>Technologies :</span> </p>
            <ul>
              <li>- Ruby on Rails</li>
              <li>- Devise | Mailjet | Bootstrap | Stripe</li>
            </ul>
          </div>
          <div className="arrow">
            <Link to="/projects">{"<"}</Link>
          </div>
        </div>
        <div className="right-column">
          <div className="image-container">
              <img src={landing} alt="page d'accueil du site kiddens"/>
              <img src={dashboard} alt="tableau d'administration du site kiddens"/>
              <img src={cart} alt="panier d'achat sur le site kiddens"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kiddens;
