import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gear from "./pages/Gear";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gear" element={<Gear />} />
      </Routes>
    </Router>
  );
}

export default App;
