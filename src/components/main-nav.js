import React from 'react';
import './main-nav.css';

export default function MainNav(props) {
  return (
    <div className="row main-nav">
      <p className="nav-link col-3">Home</p>
      <p className="nav-link col-3">About Me</p>
      <p className="nav-link col-3">Projects</p>
      <p className="nav-link col-3">Contact</p>
    </div>
  )
}
