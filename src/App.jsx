import React from "react";
import Hero from "./Components/Hero";
import Courses from "./Components/pages/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Err from "./Components/pages/err";
import Chemistry from "./Components/pages/Chemistry";
import Physics from "./Components/pages/Physics";
import Math from "./Components/pages/Math";
import HigherMath from "./Components/pages/HigherMath";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Route for Hero component */}
          <Route path="/courses" element={<Courses />} />{" "}
          <Route path="/404" element={<Err />} />
          <Route path="/chemistry" element={<Chemistry />} />{" "}
          <Route path="/Physics" element={<Physics />} />{" "}
          <Route path="/Math" element={<Math />} />{" "}
          <Route path="/HigherMath" element={<HigherMath />} />{" "}
          {/* Route for Courses page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
