import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Components/header/header.js';
import Footer from '../Components/footer/footer.js';
// import GamePlay from '../Components/about/game/gamePlay/gamePlay.js';
import Home from '../Components/about/about.js';
import Resume from '../Components/resume/resume.js';
import PortfolioContainer from '../Components/portfolio/portfolioContainer.js';
import Contact from '../Components/contact/contact.js';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<PortfolioContainer />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
