import './resume.css'

const Resume = () => {

  return (
    <div>
      <div className="resume-container">
        <div>
          <div className="left-column">
          <h3>formation</h3>
          <h4><span>2024-2025</span> Wild Code School</h4>
            <ul>
              <li>- Formation en alternance, équivalent bac + 3/4</li>
              <li>- Obtention du titre RNCP Concepteur Développeur d’Application </li>
              <li>- Sécurité, algorithmie, tests, CI/CD, conteneurisation</li>
            </ul>
          <h4><span>2023</span> The Hacking Project, parcours Dev ++</h4>
            <ul>
              <li>- formation intensive de huit mois (1200 h)</li>
              <li>- permet l'obtention d'un titre RNCP niveau 5 Dev web et mobile </li>
              <li>- apprentissage en autonomie de technologies frontend et backend</li>
            </ul>
          <h4><span>2014-2015</span> Agrégation de chinois</h4>
            <ul>
              <li>- concours sélectif de recrutement des enseignants attestant d'une connaissance avancée de la langue, de l'histoire et de la littérature chinoise
              </li>
            </ul>
          <h4><span>2013-2016</span> CAP et Brevet des Métiers d'Art ébéniste</h4>
            <ul>
              <li>- apprentissage technique, résolution de problème et travaux de groupe</li>
              <li>- mise en pratique au cours de nombreux stages en entreprise</li>
            </ul>
          <h4><span>2009-2013</span> Master en études chinoises, École Normale Supérieure de Lyon</h4>
            <ul>
              <li>- apprentissage de la recherche universitaire : autonomie et rigueur</li>
              <li>- échanges académiques à Taiwan et en Chine</li>
            </ul>
          <h4><span>2007-2009</span> Classe préparatoire aux grandes écoles, filière littéraire</h4>
            <ul>
              <li>- préparation au concours de l’École Normale Supérieure de Lyon</li>
              <li>- reçue en qualité d'élève fonctionnaire</li>
            </ul>
          <h3 className="left-column"></h3>
            <ul>
              <h3>langues</h3>
              <li><span id="light">chinois, anglais : </span>avancé</li>
              <li><span id="light">allemand, russe : </span>intermédiaire</li>
            </ul>
          </div>
        </div>
        <div className="right-column">
          <h3>expérience professionnelle </h3>
          <h4> Dev frontend chez Traace-Tennaxia <span>2023-2025</span></h4>
            <ul>
              <li>Participation à l’élaboration et au développement de fonctionnalités -</li>
              <li>Monitoring, résolution de bugs, maintenance, tests, revue de code -            </li>
              <li>Travail en équipe, communication, prise d’initiative -</li>
            </ul>
          <h4> Traduction anglais-chinois vers le français <span>2021-2023</span></h4>
            <ul>
              <li>missions variées pour Mophradat, Perspectives chinoises, revue Café -
              </li>
              <li>gestion d’une auto-entreprise -</li>
              <li>communication avec la clientèle et prospection -</li>
            </ul>
          <h4>Co-direction de la section de chinois, université Toulouse II <span>2018-2022</span></h4>
            <ul>
              <li>coordination pédagogique, gestion administrative, recrutement -</li>
              <li>enseignement de l'histoire de la Chine ancienne et contemporaine -</li>
              <li>enseignement du chinois classique, chinois des affaires, grammaire -</li>
              <li>niveaux L1 à M2 -</li>
            </ul>
          <h4>Enseignement du chinois dans le secondaire  <span>2016-2018</span></h4>
            <ul>
              <li>enseignement du chinois, niveau 2nde à BTS -</li>
            </ul>
        <div>
          <h3 className="technos"> technologies </h3>
            <ul>
              <li><span id="light">langages : </span>javascript, typescript, ruby</li>
              <li><span id="light">backend : </span>rails, nodeJS, postgreSQL, graphQL, redis</li>
              <li><span id="light">frontend : </span>html, CSS, react, tailwind, playwright</li>
              <li><span id="light">ops : </span>docker, dockerhub, github actions, nginX</li>
              <li><span id="light">collaboration : </span>Git, Github, Trello, Notion, LiveShare on VSCode</li>
              <li><span id="light">autre : </span>suite Office, LaTeX, Moodle, Pronote, Trados, OmegaT</li>
            </ul>
        </div>
      </div>
      </div >
    </div>


  )
}

export default Resume;
