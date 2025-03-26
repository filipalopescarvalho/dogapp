import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Breeds from "./Breeds";
import Tips from "./Tips";

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/breeds">Breeds</Link>
      <Link to="/tips">Tips</Link>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;