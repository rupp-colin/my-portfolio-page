import React from 'react';
import GitIcon from '../github_circle_black.png';
import EmailIcon from '../email_circle_black.png';
import LinkedInIcon from '../linkedin_circle_black-512.png';
import './contact-links.css';

export default function ContactLinks(props) {
  return (
    <div className="row contact-links">
      <div className="col-4 contact-icon">
        <img src={LinkedInIcon}></img>
      </div>
      <div className="col-4 contact-icon">
        <img src={GitIcon}></img>
      </div>
      <div className="col-4 contact-icon">
        <img src={EmailIcon}></img>
      </div>

    </div>
  )
}
