import React from 'react';
import './main-nav.css';

export default function MainNav(props) {
  return (
    <div className="row main-nav">
      <p className="nav-link col-4">About Me</p>
      <p className="nav-link col-4">Projects</p>
      <p className="nav-link col-4">Contact</p>
    </div>
  )
}
