import "./index.css";

function Home() { 
  return (
    <div className="container">
      <div className="form-card">
        <label>What is the primary purpose of your smartphone usage?</label>
        <select>
          <option>Select purpose</option>
        </select>

        <label>Which apps do you use the most?</label>
        <select>
          <option>Select apps</option>
        </select>

        <button>Next</button>
      </div>

      <div className="info-card">
        <strong>Did you know?</strong>
        <p>
          The average person checks their smartphone 58 times a day, with 30%
          checking their phones within 5 minutes of waking up.
        </p>
      </div>
    </div>
  );
}

export default Home;

