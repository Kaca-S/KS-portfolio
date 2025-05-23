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
            <li><Link to="/cat-facts">Cat Facts</Link></li>
          </ul>
          <div className="navbar-actions">
            <Link to="/login" className="nav-btn solid-blue">Login</Link>
            <Link to="/register" className="nav-btn outline-blue">Register</Link>
          </div>
        </nav>
    );
}

export default Navbar;