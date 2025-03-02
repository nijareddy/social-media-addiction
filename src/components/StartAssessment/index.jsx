import "./index.css";

function StartAssessment() { 
  return (
    <section className="assessment">
      <h2>Smartphone Usage Assessment</h2>
      <form>
        <label>What is your occupation?</label>
        <select>
          <option>Select your occupation</option>
        </select>

        <label>How many hours do you spend on your smartphone daily?</label>
        <select>
          <option>Select hours</option>
        </select>

        <label>What is the primary purpose of your smartphone usage?</label>
        <select>
          <option>Select purpose</option>
        </select>

        <label>Which apps do you use the most?</label>
        <select>
          <option>Select apps</option>
        </select>

        <button type="submit">Next</button>
      </form>
    </section>
  );
}

export default StartAssessment;
