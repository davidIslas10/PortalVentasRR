import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Banner/>
        <Service/>
        <Blog/>
      </Router>     
    </div>
  );
}

export default App;
