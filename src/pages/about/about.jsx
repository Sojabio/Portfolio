import './about.css'
import {useState} from 'react';

const About = () => {
  const [concernsContent, setConcernsContent] = useState('[...]')

  const handleClickConcerns = () => {
    concernsContent === '[...]' ? setConcernsContent(subjects) : setConcernsContent('[...]')
  }

  const subjects = () => {
    return (
      <div>
        les enjeux auxquels je suis sensible:
        <ul>
          <li>l'écologie</li>
          <li>l'éducation</li>
          <li>l'inclusivité</li>
          <li>l'accessibilité</li>
        </ul>
      </div>
    )
  }

  return (
    <div className="about">
      <div>
    <p>J'aime <span>résoudre</span> des problèmes et <span>créer</span> avec mes mains ou mon esprit. </p>
    <p>Après avoir appris le <span>chinois</span> et maîtrisé le travail du <span>bois</span>, j'ai choisi de réconcilier mes centres d'intérêt en concevant des objets virtuels à l'aide de <span>langages</span> plus abstraits.</p>
    <span>J'ai à cœur de mettre mes compétences au service de projets stimulants et porteurs de sens.</span>
      </div>
      <div className="concerns"
        onClick={handleClickConcerns}>
        <p>{concernsContent}</p>
      </div>
    </div>
  )
}

export default About;
