import { Link } from "react-router-dom";
import "./index.css";

function Navbar() { 
  return (
    <nav className="navbar">
      <h1>📱 Smartphone Addiction Predictor</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/start-assessment">Start Assessment</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
