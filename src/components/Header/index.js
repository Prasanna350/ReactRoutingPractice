// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <p className="item-styling">Wave</p>
    </div>
    <ul className="items-container">
      <li>
        <Link to="/" className="item-styling">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="item-styling">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="item-styling">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
