import {Link} from "react-router-dom";  
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
          <div className="navbar-name">KS</div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/game">Minigame</Link></li>
          </ul>
        </nav>
      );
}

export default Navbar;