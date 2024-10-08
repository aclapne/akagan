import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sandbox from './components/Sandbox/Sandbox.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import Playground from "./components/Playground/Playground.jsx";
import './App.css'

function App(){
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/sandbox" element={<Sandbox />} />
                <Route path="/playground" element={<Playground/>} />
            </Routes>
        </Router>
    );
}
export default App;