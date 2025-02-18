import React from 'react';
import './App.css';
import './style.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contect from './Contect';
import Location from './Location';  
import Service from './Service';    
import Demo from './Demo';

function App() {
  return (
    // <Router> 
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contect />} />
    //     <Route path="/location" element={<Location />} />
    //     <Route path="/service" element={<Service />} />
    //   </Routes>
    // </Router>
      < Demo />

  );
}

export default App;
