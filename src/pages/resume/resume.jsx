import './resume.css'

const Resume = () => {

  return (
    <div>
      <div className="resume-container">
        <div>
          <div className="left-column">
          <h3>formation</h3>
          <h4><span>2023</span> The Hacking Project, parcours Dev ++</h4>
            <ul>
              <li>- formation intensive de huit mois (1200 h)</li>
              <li>- permet l'obtention d'un titre RNCP niveau 5 Dev web et mobile </li>
              <li>- apprentissage en autonomie de technologies frontend et backend</li>
            </ul>
          <h4><span>2015-2014</span> Agrégation de chinois</h4>
            <ul>
              <li>- concours sélectif de recrutement des enseignants attestant d'une connaissance avancée de la langue, de l'histoire et de la littérature chinoise
              </li>
            </ul>
          <h4><span>2016-2013</span> CAP et Brevet des Métiers d'Art ébéniste</h4>
            <ul>
              <li>- apprentissage technique, résolution de problème et travaux de groupe</li>
              <li>- mise en pratique au cours de nombreux stages en entreprise</li>
            </ul>
          <h4><span>2009-2013</span> Master en études chinoises, École Normale Supérieure de Lyon</h4>
            <ul>
              <li>- apprentissage de la recherche universitaire : autonomie et rigueur</li>
              <li>- échanges académiques à Taiwan et en Chine</li>
            </ul>
          <h4><span>2007-2009</span> Classe préparatoire aux grandes écoles, filiaire littéraire</h4>
            <ul>
              <li>- préparation au concours de l’École Normale Supérieure de Lyon</li>
              <li>- reçue en qualité d'élève fonctionnaire</li>
            </ul>
          </div>
        </div>
        <div className="right-column">
          <h3>expérience professionnelle </h3>
          <h4> Traductrice indépendante <span>2007-2009</span></h4>
            <ul>
              <li><marquee behavior="" direction=""></marquee>missions variées pour Mophradat, Perspectives chinoises, revue Café -
              </li>
              <li>gestion d’une auto-entreprise -</li>
              <li>communication avec les clients et prospection -</li>
            </ul>
          <h4>Directrice adjointe de la section de chinois, université Toulouse II <span>2022-2018</span></h4>
            <ul>
              <li>coordination pédagogique, gestion administrative, recrutement -</li>
              <li>enseignement de l'histoire de la Chine ancienne et contemporaine -</li>
              <li>enseignement du chinois classique, chinois des affaires, traduction, grammaire -</li>
              <li>niveaux L1 à M2 -</li>
            </ul>
          <h4>Enseignante de chinois dans le secondaire  <span>2018-2016</span></h4>
            <ul>
              <li>enseignement du chinois, niveau 2nde à BTS -</li>
            </ul>
        </div>
      </div>
      <div className="technos">
        <p> technos : ligne avec toutes les technos que je maîtrise et j'en maîtrise vraiment bcp parce que je suis super fortiche</p>
      </div>
    </div>


  )
}

export default Resume;
