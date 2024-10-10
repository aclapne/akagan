import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar.jsx";
import Playground from "./components/Playground/Playground.jsx";
import Sandbox from "./components/Sandbox/Sandbox.jsx";
import "./App.css";
import "./index.css";
import Calculator from "./components/CalculatorApp/Calculator.jsx";
import Challenges from "./components/Challenges/Challenges.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
