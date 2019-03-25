import React from 'react';
import GitIcon from '../images/github_circle_black.png';
import EmailIcon from '../images/email_circle_black.png';
import LinkedInIcon from '../images/linkedin_circle_black-512.png';
import './header.css';

export default function Header(props){
  return (
    <div className="header">
      <div className="">
        <h1 id="i-am-colin">Colin Rupp</h1>
      </div>
      <div className="icon-container">
        <div className="header-icon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/colin-r-5b790b167/">
            <img src={LinkedInIcon} alt="linked in icon"></img>
          </a>
        </div>
        <div className="header-icon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rupp-colin">
            <img src={GitIcon} alt="github icon"></img>
          </a>
        </div>
        <div className="header-icon">
          <a href="mailto:rupp.colin@gmail.com">
            <img src={EmailIcon} alt="email icon"></img>
          </a>
        </div>
      </div>
    </div>
  )
}
