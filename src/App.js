import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header.js';
import MainNav from './components/main-nav.js';
import AboutMe from './components/about-me.js';
import ProjectBoard from './components/projects-board.js';
import ContactLinks from './components/contact-links.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <ContactLinks />
          <MainNav />
          <AboutMe />
          <ProjectBoard />
        </div>
      </Router>
    );
  }
}

export default App;
