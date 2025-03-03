import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StartAssessment from "./components/StartAssessment";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <StartAssessment />
      <About />
    </div>
  );
}

export default App;
