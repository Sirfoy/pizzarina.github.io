import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";




function App() {
  <Navbar />
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/menu" exact Component={Menu}></Route>
          <Route path="/about" exact Component={About}></Route>
          <Route path="/contact" exact Component={Contact}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
