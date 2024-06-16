import React from "react";
import Hero from "./Components/Hero";
import Courses from "./Components/pages/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Route for Hero component */}
          <Route path="/courses" element={<Courses />} />{" "}
          {/* Route for Courses page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
