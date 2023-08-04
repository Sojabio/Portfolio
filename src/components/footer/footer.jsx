import './footer.css'
import ToggleButton from '../buttons/toggle';
import Linkedin from '../buttons/linkedin';
import Github from '../buttons/github';
import Mail from '../buttons/mail';

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/solene-jabaud/">
          <Linkedin/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Sojabio">
          <Github/>
          </a>
        </li>
        <li>
          <a href="mailto:SOLENE.JABAUD@GMAIL.COM ">
          <Mail/>
          </a>
        </li>
        <li className="foot-toggle">
          <ToggleButton/>
        </li>
      </ul>
    </div>
  )
}

export default Footer;
