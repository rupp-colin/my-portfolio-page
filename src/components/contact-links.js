import React from 'react';
import GitIcon from '../images/github_circle_black.png';
import EmailIcon from '../images/email_circle_black.png';
import LinkedInIcon from '../images/linkedin_circle_black-512.png';
import './contact-links.css';

export default function ContactLinks(props) {
  return (
    <div className="row contact-links">
      <div className="col-4 contact-icon">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/colin-r-5b790b167/">
          <img src={LinkedInIcon} alt="linked in icon"></img>
        </a>
      </div>
      <div className="col-4 contact-icon">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/rupp-colin">
          <img src={GitIcon} alt="github icon"></img>
        </a>
      </div>
      <div className="col-4 contact-icon">
        <a href="mailto:rupp.colin@gmail.com">
          <img src={EmailIcon} alt="email icon"></img>
        </a>
      </div>
    </div>
  )
}
