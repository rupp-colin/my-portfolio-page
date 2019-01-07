import React, { Component } from 'react';

import Header from './components/header.js';
import MainNav from './components/main-nav.js';
import AboutMe from './components/about-me.js';
import ProjectBoard from './components/projects-board.js';
import Summary from './components/summary.js';
import Footer from './components/footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Summary />
          <MainNav />
          <ProjectBoard />
          <AboutMe />
          <Footer />
        </div>
    );
  }
}

export default App;
