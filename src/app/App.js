import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Header from '../Components/header/header.js';
import Footer from '../Components/footer/footer.js';
import About from '../Components/about/about.js';
import Resume from '../Components/resume/resume.js';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
        <Route path='/' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        </Routes>
      </main>
      {/* <main>
        <Switch>
          <Route path='/articles/:title'>
            <Article />
          </Route>
          <Route path='/articles'>
            <Articles />
          </Route>
          <Route path='/authors/:name'>
            <Author />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/categories'>
            <Categories />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </main> */}
      <Footer />
    </Router>
  );
}

export default App;
