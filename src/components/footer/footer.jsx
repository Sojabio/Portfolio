import './footer.css'
import ToggleButton from '../Buttons/toggle';


const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li className="foot-toggle">
          <ToggleButton/>
        </li>
      </ul>
    </div>
  )
}

export default Footer;
