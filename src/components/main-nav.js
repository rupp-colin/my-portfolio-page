import React from 'react';
import './main-nav.css';

export default function MainNav(props) {
  return (
    <div className="row main-nav">
      <a
        className="nav-link col-4"
        href="#about-me"
      >
        <span>About Me</span>
      </a>
      <a
        className="nav-link col-4"
        href="#project-board-header"
      >
        <span>Projects</span>
      </a>
      <p className="nav-link col-4">Contact</p>
    </div>
  )
}
