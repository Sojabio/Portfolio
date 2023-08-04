import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './buttons.css'

const Mail = () => {

  return (
    <div className="button mail">
    <FontAwesomeIcon icon={faEnvelope} alt="send email" />
    </div>
  )
}

export default Mail;
