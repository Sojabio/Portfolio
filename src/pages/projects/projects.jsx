import { Link } from 'react-router-dom';
import './projects.css'


const Projects = () => {


    return (
      <>
      <div className="card">
          <img src='src/assets/images/caravan.png' />
          <div className="card-body">
            <h2>{"[CaraVan]"}</h2>
            <p className="card-text">Application de location de vans</p>
            <h5>Ruby on Rails</h5>
            <Link to="/projects/caravan" className="see-more-button">en savoir plus</Link>
          </div>
        </div>
     </>
    );
  }

export default Projects;
