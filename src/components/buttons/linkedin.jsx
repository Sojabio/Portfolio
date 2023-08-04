import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './buttons.css'

const Linkedin = () => {

  return (
    <div className="button linkedin">
    <FontAwesomeIcon icon={faLinkedin} alt="link to Linkedin account" />
    </div>
  )
}

export default Linkedin;
