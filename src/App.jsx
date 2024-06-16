import React from "react";
import Hero from "./Components/Hero";
import Courses from "./Components/pages/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Err from "./Components/pages/err";
import Chemistry from "./Components/pages/Chemistry";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Route for Hero component */}
          <Route path="/courses" element={<Courses />} />{" "}
          <Route path="/404" element={<Err />} />
          <Route path="/chemistry" element={<Chemistry />} />{" "}
          {/* Route for Courses page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
