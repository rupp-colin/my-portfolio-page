import React from 'react';
import ContactLinks from './contact-links.js';
import './footer.css';

export default function Footer(props) {
  return (
    <footer id="lets-talk">
      <h2 className="row">Lets talk!</h2>
      <div className="row links-container">
        <p className="col-12 contact-link">
          <a href="https://docs.google.com/document/d/1VaGXz6-6S9AhlMHQcSEarB54jRGqkumdGURiMAuH93M/edit?usp=sharing">resume</a>
        </p>
        <p className="col-12 contact-link">
          <a href="mailto:rupp.colin@gmail.com">rupp.colin@gmail.com</a>
        </p>
        <p className="col-12 contact-link">
          <a href="https://github.com/rupp-colin">github</a>
        </p>
        <p className="col-12 contact-link">
          <a href="https://www.linkedin.com/in/colin-r-5b790b167/">LinkedIn</a>
        </p>
      </div>
      <ContactLinks />
      <div className="spacer">
      </div>

    </footer>
  )
}

