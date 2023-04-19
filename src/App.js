import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Thankyou from "./Pages/Thankyou"



function App() {
  <Navbar />
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/menu" Component={Menu}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/thankyou" Component={Thankyou}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
