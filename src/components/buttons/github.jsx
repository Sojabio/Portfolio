import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import './buttons.css'

const Github = () => {

  return (
    <div className="button github">
    <FontAwesomeIcon icon={faSquareGithub} alt="link to Github account" />
    </div>
  )
}

export default Github;
