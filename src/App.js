import { useState, useEffect } from 'react';
import './App.css';
import tachyons from 'tachyons';


import Home from './Pages/Home';
import Events from './Pages/Events';
import Team from './Pages/Team';
import Schedule from './Pages/Schedule';
import Sponsors from './Pages/Sponsors';
import Contact from './Pages/Contact';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Register from './Pages/Register';


function App() {
  return (
    <div className="App">  
      <Router>
          <Header />
          {/*All our Routes goes here!*/}
          <div className='pages'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Schedule" element={<Schedule />} />
              {/* <Route path="/Sponsors" element={<Sponsors />} /> */}
              <Route path="/Contact" element={<Contact />} />
              {/* <Route path="/Register" element={<Register />} /> */}
            </Routes>
          </div>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
