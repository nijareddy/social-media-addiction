import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📱 Smartphone Addiction Predictor</div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#start-assessment">Start Assessment</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
