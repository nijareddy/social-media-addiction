import "./index.css";

function Home() {
  return (
    <div>
      <section id="home" className="container">
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
      </section>

      <section id="start-assessment" className="container">
        <h2>Start Your Assessment</h2>
        <p>Begin by filling out the form to check your smartphone usage.</p>
      </section>

      <section id="about" className="container">
        <h2>About This Project</h2>
        <p>
          This smartphone addiction assessment tool helps you understand your
          relationship with your smartphone and provides personalized
          recommendations for healthier digital habits.
        </p>
      </section>
    </div>
  );
}

export default Home;
